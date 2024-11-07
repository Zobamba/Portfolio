(function() {
    const partnerObject = window.__partnerObject || "po";
    const po = window[partnerObject] || (() => po);
    po('settings', 'host', 'https://app.partnero.com/pub/v1');
    po('program', 'PREZJRAZ', 'type', 'affiliate');
    po('program', 'PREZJRAZ', 'settings', 'cookie_time', 30);
    po('program', 'PREZJRAZ', 'settings', 'url_format', 'query');
    po('program', 'PREZJRAZ', 'settings', 'link_param', 'aff');
    po('program', 'PREZJRAZ', 'settings', 'query_param', 'ref');
    po('program', 'PREZJRAZ', 'settings', 'simple_tracking_enabled', '');
})();
