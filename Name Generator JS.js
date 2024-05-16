function generateName() {
    var startWord = document.getElementById('startWord').value.trim();
    var endWord = document.getElementById('endWord').value.trim();

    if (!startWord || !endWord) {
        alert('Please enter both starting and ending words.');
        return;
    }

    var prefixes = ['Tech', 'Inno', 'Global', 'Apex', 'Bright', 'Eco', 'First', 'Nex', 'Smart', 'Ultimate'];
    var suffixes = ['Corp', 'Solutions', 'Labs', 'Systems', 'Industries', 'Ventures', 'Enterprises', 'Tech', 'Innovations', 'Group'];

    var randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    var randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];

    var companyName = startWord + randomPrefix + endWord + randomSuffix;

    document.getElementById('output').innerText = companyName;
}
