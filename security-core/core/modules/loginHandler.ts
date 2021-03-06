// Copyright 2020-2020 The Mandarine.TS Framework authors. All rights reserved. MIT license.

import type { Mandarine } from "../../../main-core/Mandarine.ns.ts";

export class LoginHandler implements Mandarine.Security.Auth.Handler {

    public onSuccess(request: any, response: any, result: Mandarine.Security.Auth.AuthenticationResult) {
    }

    public onFailure(request: any, response: any, result: Mandarine.Security.Auth.AuthenticationResult) {
        if(result.status === "FAILED" || result.status === "UNKNOWN") {
            response.body = {
                status: result.status,
                exception: result.exception,
                message: result.message
            };
        }
    }

}