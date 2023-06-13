# [📡 XRay-16 engine typescript definitions](https://github.com/xray-forge/xray-16-types)

[![Node.js CI](https://github.com/xray-forge/xray-16-types/actions/workflows/build_and_test.yml/badge.svg)](https://github.com/xray-forge/xray-16-types/actions/workflows/build_and_test.yml)

X-Ray16 engine bindings documentation and types. <br/>
For usage with [TypeScriptToLua](https://typescripttolua.github.io/docs/getting-started).

<p>
Module contains xray engine globals typedefs for typescript. <br/>
By default x-ray export many bindings that can be used from lua scripts, but without game API documentation.

To check more details / correct typing you always can reference X-Ray source code.

</p>

## 🗻 Docs

Types documentation can be checked [here](https://xray-forge.github.io/xray-16-types/modules.html).

## 🧱 Usage

Types are used with [xrf template](https://github.com/xray-forge/stalker-xrf-template) and can be referenced as an example.

## 🎮 Updating types

For easier navigation over codebase and typing following rules are applied:

- Type declaration should have \@source docblock with matching c++ counterpart signature
- Variable and class namings follow c++ conventions for easier binding and matching engine codebase
- XRay types should be prefixed with IXR or TXR if they do not have runtime representation

## 📦Extending C++ classes and overriding virtual methods

### Lua

<p>
C++ classes can be extended in Lua code with 'class' keyword. 
Class declaration registers table as userdata and adds constructor/destructor metamethods. <br/>
</p>

### Typescript

<p>
In TS codebase '@LuabindClass' decorator can be used to modify transformation and enable virtual calls. <br/>
Separate transformer is needed to build luabind classes instead of table-based classes.
</p>

## 🧱 Getting up-to-date LUA bindings

- Run game engine with `-dump_bindings` flag
- Check userdata folder _(where game saves are stored)_ `scriptbindings_*.txt` files

## 🧲 References

- X-Ray C++ source code
- LuaBind sources and docs
- LuaJit sources and docs
