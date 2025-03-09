<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function login(Request $request)
    {

        //validate input
        //set validation rule
        $validator = Validator::make($request->all(), [
            "email" => "required|string|max:255",
            "password" => "required|string"
        ]);

        //validate user input,
        if ($validator->fails()) {
            //return json error message
            return response()
                ->json(
                    //validation error
                    $validator->errors()
                    );
        }
        $credentials = $request->only("email", "password");
        if(!\Auth::attempt($credentials)){
            return response()->json([
                "message" => "user not found",
            ], 401);
        }

        $user = User::where("email", $request->email)->firstOrFail();
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'user' => $user,
            "access_token" => $token,
            "token_type" => "Bearer",
            "message" => "login successful"
        ]);


    }



    public function register(Request $request)
    {

        //validate form input data
        $validate_status = $this->validateFormErrors($request);
        if ($validate_status) {

            /**
             * Create a new User
             *
             */

            $user = User::create([
                "name" => $request->name,
                "email" => $request->email,
                "password" => Hash::make($request->password)
            ]);

            //create a unique token for created user using @laravel/sanctum
            $token = $user->createToken('auth_token')->plainTextToken;

            //return new user account object
            return response()->json([
                "data" => $user,
                "access_token" => $token,
                "token_type" => "Bearer",
                "message" => "account created successfully",
            ]);
        }
    }

    /**
     * destroy bearer token
     *
     * @return json
     */
    public function logout() {
        //delete @auth user bearer tokens
        \Auth::user()->tokens()->delete();
        //return respons
        return response()->json([
            "message" => "user logout successful",
        ]);

    }

    //validation function
    /**
     * param \Illuminate\Http\Request
     * return $validator == true? 'validation errors in json format on fail ' : bool true;
     *
     */
    public function validateFormErrors(Request $request)
    {
        //data validation
        $validator = Validator::make($request->all(), [
            "name" => "required|string",
            "email" => "required|string|max:255|unique:users",
            "password" => "required|string"
        ]);

        //validate validator status
        if ($validator->fails()) {
            //return validation errors
            return response()->json($validator->errors());
        }

        // validator
        return true;
    }
}
