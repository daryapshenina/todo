<?php

namespace App\Http\Controllers;

use App\Http\Calendar;
use App\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{

    public function index()
    {
       $calendar=new Calendar();
       $tasks= Task::orderBy('created_at', 'asc')->get();
        return view('task', [
            'tasks' => $tasks
        ]);
    }

    public function newTask($request){

$requests=$request->request;
var_dump($requests);
die;

    }
    public function deleteTask(){
        echo '4564';
        die;
    }


}
