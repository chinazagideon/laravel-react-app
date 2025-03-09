<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class PostTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_example()
    {
        // $response = $this->get('/');

        // $response->assertStatus(200);
        $this->canCreatePost();
    }

    /**
     * @test1
     *
     * @return boolean
     */
    public function canCreatePost(){
        $data = [
            "title" => $this->faker->sentence,
            "description" => $this->faker->paragraph
        ];

        $response = $this->json('POST', '/api/v1/posts', $data);
        /**
         * check data is in json format
         */
        $response->assertStatus(201)
            ->dump()//use to know data is being returned
            ->assertJson(compact('data')); //from this line

            /**
             * check database to validate test data
             */
        $this->assertDatabaseHas('posts',
            [
                'title' => $data['title'],
                'description' => $data['description']
            ]);
    }
}
