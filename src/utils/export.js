import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

/**
 * Export element as PNG image
 * @param {HTMLElement} element - DOM element to capture
 * @param {string} filename - Output filename
 * @param {object} options - html2canvas options
 */
export async function exportToPNG(element, filename = 'hero-card.png', options = {}) {
    const defaultOptions = {
        scale: 2, // Higher resolution
        useCORS: true,
        backgroundColor: '#F5F5DC',
        logging: false,
        ...options,
    };

    try {
        const canvas = await html2canvas(element, defaultOptions);

        // Convert to blob and download
        canvas.toBlob((blob) => {
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.download = filename;
            link.href = url;
            link.click();

            // Cleanup
            URL.revokeObjectURL(url);
        });

        return true;
    } catch (error) {
        console.error('PNG export failed:', error);
        return false;
    }
}

/**
 * Export element as PDF
 * @param {HTMLElement} element - DOM element to capture
 * @param {string} filename - Output filename
 * @param {object} options - PDF options
 */
export async function exportToPDF(element, filename = 'hero-card.pdf', options = {}) {
    const defaultOptions = {
        orientation: 'portrait',
        unit: 'in',
        format: [4, 6.5], // 4" x 6.5" postcard size
        ...options,
    };

    try {
        const canvas = await html2canvas(element, {
            scale: 3,
            useCORS: true,
            backgroundColor: '#F5F5DC',
            logging: false,
        });

        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF(defaultOptions);

        // Calculate dimensions to fit page
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();

        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save(filename);

        return true;
    } catch (error) {
        console.error('PDF export failed:', error);
        return false;
    }
}

/**
 * Export profiles as JSON
 * @param {array} profiles - Array of profile objects
 * @param {string} filename - Output filename
 */
export function exportToJSON(profiles, filename = 'numerology-profiles.json') {
    const dataStr = JSON.stringify(profiles, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.download = filename;
    link.href = url;
    link.click();

    URL.revokeObjectURL(url);
}

/**
 * Import profiles from JSON file
 * @param {File} file - JSON file to import
 * @returns {Promise<array>} - Parsed profiles
 */
export function importFromJSON(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = (e) => {
            try {
                const profiles = JSON.parse(e.target.result);

                // Validate structure
                if (!Array.isArray(profiles)) {
                    throw new Error('Invalid JSON format: expected array');
                }

                resolve(profiles);
            } catch (error) {
                reject(error);
            }
        };

        reader.onerror = () => reject(new Error('File read error'));
        reader.readAsText(file);
    });
}
