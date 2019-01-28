/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

declare function require(moduleName: string): any; // declare node.js "require" so that we can conditionally import
if (typeof window !== "undefined" && typeof document !== "undefined") {
    // we're in browser
    // tslint:disable-next-line:no-var-requires
    require("dom4"); // only import actual dom4 if we're in the browser (not server-compatible)
    // we'll still need dom4 types for the TypeScript to compile, these are included in package.json
}

export * from "./slider/handleProps";
export * from "./slider/multiSlider";
export * from "./slider/rangeSlider";
export * from "./slider/slider";
