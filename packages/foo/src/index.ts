import { log as bar } from '@example/bar';

export function log () {
  console.log('I am a dependency bar');
  console.log('My children are: ', bar())
}
