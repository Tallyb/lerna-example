import { log as bar } from '@example/bar';
import { log as foo } from '@example/foo';

export function log () {
  console.log('FooBar with children: ');
  bar();
  foo();
}

log();