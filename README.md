# vitest-env

```sh
yarn test
```

outputs

```
AssertionError: expected undefined to deeply equal 'BAR'
 ❯ env.test.ts:10:26
      8| 
      9| test.concurrent(".env.test", () => {
     10|   expect(process.env.FOO).toEqual("BAR");
       |                          ^
     11| });
     12| 

  - Expected   "BAR"
  + Received   "undefined"
```

`.env.test` is not picked up. See [its contents](.env.test)

[envDir](https://vitejs.dev/config/#envdir) is `root` by default
