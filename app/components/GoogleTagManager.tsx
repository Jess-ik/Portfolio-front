"use client"

import React, { useEffect } from 'react';

export default function GoogleTagManager() {
  useEffect(() => {
    // Le code GTM pour initialiser le gestionnaire de balises va ici
    (function (w: any, d: any, s: string, l: string, i: string) {
      w[l] = w[l] || [];
      w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s) as HTMLIFrameElement;
      var dl = l != 'dataLayer' ? '&l=' + l : '';
      j.src = 'https://www.googletagmanager.com/ns.html?id=' + i + dl;
      f.parentNode!.insertBefore(j, f);
    })(window, document, 'iframe', 'dataLayer', 'GTM-WMNV7PW9');
  }, []);

  return null;
}
