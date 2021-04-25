import { log as bar } from '@example/bar';
import { log as foo } from '@example/foo';

export function log () {
  console.log('I am a dependency bar');
  console.log('My children are: ', bar(), foo())
}