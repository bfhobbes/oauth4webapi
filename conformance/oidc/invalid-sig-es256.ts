import { test, skipped, modules } from '../runner.js'

for (const module of modules('invalid-sig-es256')) {
  test.serial(skipped, module)
}
