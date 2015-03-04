Install
---

    $ npm install ember-orm
    $ component install kelonye/ember-orm

Example
---

See `test/support`

Test
---

    $ make test

Ember-data query example
---

```js

this
  .store
  .find('model', {
    conditions: {
      category: 'category_id'
    },
    options: {
      skip: 0, // starting row
      limit: 10, // ending row
      sort: {
        created_at: -1 // order by latest
      }
    }
  });

```

Similar
---

- [ember-mongoose](https://github.com/kelonye/ember-mongoose)
