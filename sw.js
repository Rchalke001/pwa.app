self.addEventListener('install', evt => {
    console.log('Service worker is registered');
});

self.addEventListener('activate', evt => {
    console.log('Service worker is Activated');
});

self.addEventListener('fetch', evt => {
    console.log('Service worker is fetched');
});
