# `types`

Sonr type definitions for JS and JSON Schema.

## Usage

```js
import { UserSchema } from "./gen/user_pb.js";
import { create, toBinary, toJson } from "@bufbuild/protobuf";

let user = create(UserSchema, {
  firstName: "Homer",
  lastName: "Simpson",
  active: true,
  locations: ["Springfield"],
  projects: { SPP: "Springfield Power Plant" },
  manager: {
    firstName: "Montgomery",
    lastName: "Burns",
  },
});

const bytes = toBinary(UserSchema, user);
const json = toJson(UserSchema, user);
```
