// src/utils/gtag.ts

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
 * نقوم فقط بإرسال الحدث ولا نتدخل في عملية فتح الرابط
 */
export const gtagReportConversion = (conversionId: string): void => {
    try {
        if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", "conversion", {
                send_to: conversionId,
            });
        }
    } catch (error) {
        console.error("خطأ في تتبع التحويل:", error);
    }
};

/**
 * تتبع حدث مخصص في Google Analytics
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