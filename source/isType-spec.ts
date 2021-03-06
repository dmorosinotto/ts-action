/**
 * @license Copyright © 2017 Nicholas Jamieson. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/cartant/ts-action
 */
/*tslint:disable:no-unused-expression*/

import { expect } from "chai";
import { usingBase, usingEmpty, usingPayload, usingProps } from "./foobar-spec";
import { isType } from "./isType";

describe("isType", () => {

    describe("base", () => {

        const Bar = usingBase.Bar;
        const Foo = usingBase.Foo;

        it("should return true for matching actions", () => {
            const action = new Foo(42);
            expect(isType(action, Foo)).to.be.true;
            if (isType(action, Foo)) {
                expect(action.foo).to.equal(42);
            }
        });

        it("should return false for non-matching actions", () => {
            const action = new Bar(56);
            expect(isType(action, Foo)).to.be.false;
        });
    });

    describe("empty", () => {

        const Bar = usingEmpty.Bar;
        const Foo = usingEmpty.Foo;

        it("should return true for matching actions", () => {
            const action = new Foo();
            expect(isType(action, Foo)).to.be.true;
        });

        it("should return false for non-matching actions", () => {
            const action = new Bar();
            expect(isType(action, Foo)).to.be.false;
        });
    });

    describe("payload", () => {

        const Bar = usingPayload.Bar;
        const Foo = usingPayload.Foo;

        it("should return true for matching actions", () => {
            const action = new Foo({ foo: 42 });
            expect(isType(action, Foo)).to.be.true;
            if (isType(action, Foo)) {
                expect(action.payload.foo).to.equal(42);
            }
        });

        it("should return false for non-matching actions", () => {
            const action = new Bar({ bar: 56 });
            expect(isType(action, Foo)).to.be.false;
        });
    });

    describe("props", () => {

        const Bar = usingProps.Bar;
        const Foo = usingProps.Foo;

        it("should return true for matching actions", () => {
            const action = new Foo({ foo: 42 });
            expect(isType(action, Foo)).to.be.true;
            if (isType(action, Foo)) {
                expect(action.foo).to.equal(42);
            }
        });

        it("should return false for non-matching actions", () => {
            const action = new Bar({ bar: 56 });
            expect(isType(action, Foo)).to.be.false;
        });
    });
});
