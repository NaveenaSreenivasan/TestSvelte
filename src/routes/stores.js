import { writable } from 'svelte/store';

export const count = writable(0);
export var arrcheck = writable(["aaa","bbb","ccc","ddd","eee"]);
export const col = writable([]);

export var storeArr = writable(["Alpha","Beta","Gamma"]);