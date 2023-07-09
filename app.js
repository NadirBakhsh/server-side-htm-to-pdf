const fs = require('fs')
const pdf = require('html-pdf')

const html = fs.readFileSync('pdf.html', 'utf8')

const pageNumber = 1


const options = {
	format: 'A4',
	orientation: 'portrait',
	border: '10mm',
	footer: {
		height: '10mm',
		contents: {
			default: `
			<hr class="divider" />
			<p class="bold align-center">1</p>
			`,
		  },
	},
	type: 'pdf',
	timeout: 30000,
}

pdf.create(html, options).toFile('./output.pdf', (err, res) => {
	if (err) return console.log(err)
	console.log('PDF generated successfully!')
})
