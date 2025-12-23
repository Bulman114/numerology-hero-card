import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Share2, Twitter, Facebook, Link2, Check, Mail } from 'lucide-react';

export default function ShareButtons({ profile, onClose }) {
    const [copied, setCopied] = useState(false);

    if (!profile) return null;

    const fullName = [profile.firstName, profile.middleName, profile.lastName]
        .filter(Boolean)
        .join(' ');

    const lifePath = profile.numbers.lifePath.value;
    const shareText = `🔢 My Life Path Number is ${lifePath}! Discover yours with Numerology Hero Card.`;
    const shareUrl = typeof window !== 'undefined' ? window.location.origin : 'https://numerology-hero-card.vercel.app';

    // Create a minimal shareable link with encoded profile data
    const createShareableLink = () => {
        const data = {
            fn: profile.firstName,
            ln: profile.lastName,
            bd: `${profile.birthdate.month}-${profile.birthdate.day}-${profile.birthdate.year}`,
        };
        const encoded = btoa(JSON.stringify(data));
        return `${shareUrl}?share=${encoded}`;
    };

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(createShareableLink());
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    const handleTwitterShare = () => {
        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
        window.open(url, '_blank', 'width=600,height=400');
    };

    const handleFacebookShare = () => {
        const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`;
        window.open(url, '_blank', 'width=600,height=400');
    };

    const handleEmailShare = () => {
        const subject = `My Numerology Hero Card - Life Path ${lifePath}`;
        const body = `${shareText}\n\nCheck it out: ${shareUrl}`;
        window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    const handleNativeShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Numerology Hero Card',
                    text: shareText,
                    url: shareUrl,
                });
            } catch (err) {
                if (err.name !== 'AbortError') {
                    console.error('Share failed:', err);
                }
            }
        }
    };

    const shareOptions = [
        {
            id: 'copy',
            label: copied ? 'Copied!' : 'Copy Link',
            icon: copied ? Check : Link2,
            onClick: handleCopyLink,
            color: 'text-accent-teal',
        },
        {
            id: 'twitter',
            label: 'Twitter / X',
            icon: Twitter,
            onClick: handleTwitterShare,
            color: 'text-[#1DA1F2]',
        },
        {
            id: 'facebook',
            label: 'Facebook',
            icon: Facebook,
            onClick: handleFacebookShare,
            color: 'text-[#4267B2]',
        },
        {
            id: 'email',
            label: 'Email',
            icon: Mail,
            onClick: handleEmailShare,
            color: 'text-accent-primary',
        },
    ];

    // Add native share if supported
    if (typeof navigator !== 'undefined' && navigator.share) {
        shareOptions.unshift({
            id: 'native',
            label: 'Share',
            icon: Share2,
            onClick: handleNativeShare,
            color: 'text-accent-gold',
        });
    }

    return (
        <div className="space-y-4">
            <div className="text-center mb-4">
                <p className="text-text-secondary text-sm">
                    Share your Life Path {lifePath} discovery
                </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
                {shareOptions.map((option, idx) => (
                    <motion.button
                        key={option.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        onClick={option.onClick}
                        className="flex items-center justify-center gap-2 p-3 rounded-xl bg-bg-elevated border border-border-default hover:border-border-accent transition-all hover:bg-bg-card"
                    >
                        <option.icon size={18} className={option.color} />
                        <span className="text-text-primary text-sm font-medium">
                            {option.label}
                        </span>
                    </motion.button>
                ))}
            </div>

            {/* Preview of share text */}
            <div className="mt-4 p-3 bg-bg-secondary rounded-lg">
                <p className="text-text-muted text-xs mb-1">Preview:</p>
                <p className="text-text-secondary text-sm italic">{shareText}</p>
            </div>
        </div>
    );
}
