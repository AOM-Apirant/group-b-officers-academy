// Navigation Debug Script
const pages = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'Login', path: '/login' }
];

console.log('Ì¥ç Navigation Debug Information:');
console.log('================================\n');

pages.forEach(page => {
  console.log(`‚úÖ ${page.name}: http://localhost:3000${page.path}`);
});

console.log('\nÌ≥ù Steps to Fix Navigation:');
console.log('1. Open browser to http://localhost:3000');
console.log('2. Open DevTools (F12)');
console.log('3. Go to Console tab');
console.log('4. Click navigation links');
console.log('5. Check for any errors\n');

console.log('Ì¥ß Quick Fixes:');
console.log('- Clear browser cache (Ctrl+Shift+Delete)');
console.log('- Hard refresh (Ctrl+F5)');
console.log('- Try incognito mode (Ctrl+Shift+N)');
console.log('- Check if server is running on port 3000\n');
