---
layout: home
title: Digital Dojo Experience
lang: en
ref: events
permalink: /events/
categories: events
---


<div id="calendar" style="max-width: 800px;margin: 2rem auto;padding: 0 5px"></div>
<pre id="debug"></pre>
<div style="text-align: center">
</div>





<link rel="stylesheet" href="../assets/dist/calendar.css">
<script src="../assets/dist/calendar.js"></script>
<script>
var calendar = new Calendar({
    target: document.querySelector("#calendar"),
    data: {
    escape: false,
    view: 'calendar',
    year: 2021,
    month: 09,
    }
})
calendar.set({message: 'loading...'})
fetch("../assets/entries.json").then(r => r.json()).then(data => {
    var entries = calendar.get('entries')
    entries = entries.concat(data.entries)
    calendar.set({entries: entries, message: ''})
})

function debug() {
    document.querySelector('#debug').textContent = JSON.stringify(calendar.get(), null, 4)
    }
</script>


