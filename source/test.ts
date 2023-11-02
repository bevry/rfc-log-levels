import { equal } from 'assert-helpers'
import kava from 'kava'
import { rfcLogLevels } from './index.js'
import { writeFile } from 'fs'
import { join } from 'path'

import filedirname from 'filedirname'
const [file, dir] = filedirname()
const jsonFilePath = join(dir, '..', 'index.json')

kava.suite('rfc-log-levels', function (suite, test) {
	test('write the json file', function (done) {
		writeFile(jsonFilePath, JSON.stringify(rfcLogLevels, null, '  '), (err) =>
			err ? done(err) : done(),
		)
	})
})
