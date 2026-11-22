const fs=require('node:fs'),path=require('node:path');
fs.mkdirSync('public',{recursive:true});
for(const f of fs.readdirSync('.'))if(/\.(html|css|js)$/.test(f)&&!['server.js','admin-orders.html'].includes(f))fs.copyFileSync(f,path.join('public',f));
fs.cpSync('assets','public/assets',{recursive:true});
for(const f of ['print-order.html']){const p=path.join('public',f);let html=fs.readFileSync(p,'utf8');html=html.replace('</head>','<script src="/cloud-upload.js"></script></head>');fs.writeFileSync(p,html)}
require('esbuild').buildSync({entryPoints:['scripts/cloud-upload.js'],bundle:true,format:'iife',outfile:'public/cloud-upload.js',minify:true});
