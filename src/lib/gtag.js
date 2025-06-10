
export const GA_TRACKING_ID = 'YOUR_GA_TRACKING_ID'; // This should be replaced by the user's actual ID

export const initGA = (trackingId) => {
  if (typeof window !== 'undefined' && trackingId && trackingId !== 'YOUR_GA_TRACKING_ID') {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', trackingId, {
      page_path: window.location.pathname,
    });
    console.log("Google Analytics Initialized with ID:", trackingId);
  } else if (trackingId === 'YOUR_GA_TRACKING_ID') {
    console.warn("Google Analytics not initialized: Please replace YOUR_GA_TRACKING_ID with your actual GA Tracking ID in src/lib/gtag.js and src/App.jsx.");
  }
};

export const logPageView = () => {
  if (typeof window !== 'undefined' && window.gtag && GA_TRACKING_ID !== 'YOUR_GA_TRACKING_ID') {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: window.location.pathname + window.location.search,
    });
  }
};

export const logEvent = ({ action, category, label, value }) => {
  if (typeof window !== 'undefined' && window.gtag && GA_TRACKING_ID !== 'YOUR_GA_TRACKING_ID') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  } else if (GA_TRACKING_ID === 'YOUR_GA_TRACKING_ID' && typeof window !== 'undefined' && window.gtag) {
     console.log(`GA Event (not sent - using placeholder ID): Action: ${action}, Category: ${category}, Label: ${label}, Value: ${value}`);
  }
};

export const logEmailLinkClick = (pagePath) => {
  logEvent({
    action: 'Contact Click - Email',
    category: 'Email Link',
    label: `Email Link Click - ${pagePath}`,
  });
};

export const logPhoneLinkClick = (pagePath) => {
  logEvent({
    action: 'Contact Click - Call',
    category: 'Phone Link',
    label: `Phone Link Click - ${pagePath}`,
  });
};

export const logWhatsAppLinkClick = (pagePath) => {
  logEvent({
    action: 'Contact Click - WhatsApp',
    category: 'WhatsApp Link',
    label: `WhatsApp Link Click - ${pagePath}`,
  });
};

export const logSmsLinkClick = (pagePath) => {
  logEvent({
    action: 'Contact Click - SMS',
    category: 'SMS Link',
    label: `SMS Link Click - ${pagePath}`,
  });
};

export const logFormSubmission = (formName, pagePath) => {
  logEvent({
    action: 'Form Submission',
    category: 'Form',
    label: `${formName} - ${pagePath}`,
  });
};
