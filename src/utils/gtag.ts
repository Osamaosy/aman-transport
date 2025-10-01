// TypeScript interfaces for gtag
interface GtagConfigParams {
    [key: string]: string | number | boolean | undefined;
}

interface GtagEventParams {
    send_to?: string;
    event_callback?: () => void;
    [key: string]: string | number | boolean | (() => void) | undefined;
}

// TypeScript declaration for gtag
declare global {
    interface Window {
        gtag: (
            command: 'event' | 'config' | 'js',
            targetId: string | Date,
            config?: GtagConfigParams | GtagEventParams
        ) => void;
    }
}

// Google Ads Conversion IDs
export const CONVERSION_IDS = {
    PHONE_CALL: 'AW-17595622131/4Z1YCM6pkKMbEPPFn8ZB',
    WHATSAPP: 'AW-17595622131/_PhUCL61g6MbEPPFn8ZB',
} as const;

/**
 * تتبع التحويل في Google Ads
 * @param url - الرابط المراد التوجيه إليه
 * @param conversionId - معرف التحويل من Google Ads
 * @returns false دائماً لمنع السلوك الافتراضي
 */
export const gtagReportConversion = (url: string, conversionId: string): boolean => {
    try {
        if (typeof window !== "undefined" && window.gtag) {
            // سجل التحويل بدون callback
            window.gtag("event", "conversion", {
                send_to: conversionId,
            });
        }

        // انتقل للرابط مباشرة (بدون انتظار)
        if (typeof url !== "undefined") {
            window.location.href = url;
        }
    } catch (error) {
        console.error("خطأ في تتبع التحويل:", error);
        // في حالة الخطأ، انتقل للرابط مباشرة
        if (typeof url !== "undefined") {
            window.location.href = url;
        }
    }
    return false;
};

/**
 * تتبع حدث مخصص في Google Analytics
 * @param eventName - اسم الحدث
 * @param eventParams - معاملات الحدث
 */
export const gtagEvent = (eventName: string, eventParams?: GtagEventParams): void => {
    try {
        if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", eventName, eventParams);
        }
    } catch (error) {
        console.error("خطأ في تتبع الحدث:", error);
    }
};