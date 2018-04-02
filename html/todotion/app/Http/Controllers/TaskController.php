<?php

namespace App\Http\Controllers;

use App\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{

    public function index()
    {
       $tasks= Task::orderBy('created_at', 'asc')->get();
        return view('task', [
            'tasks' => $tasks
        ]);


    }
}
