import { equal } from 'assert-helpers'
import kava from 'kava'
import { rfcLogLevels } from './index.js'
import { writeFile } from 'fs'
import { join } from 'path'

kava.suite('rfc-log-levels', function (suite, test) {
	test('write the json file', function (done) {
		writeFile(
			join(__dirname, '..', 'index.json'),
			JSON.stringify(rfcLogLevels, null, '  '),
			(err) => (err ? done(err) : done())
		)
	})
})
