<?php

namespace App\Http\Livewire;

use Livewire\Component;
use App\Models\User; 

class UserForm extends Component
{
    public $name;
    public $email;
    public $age;
    public $address;

    public function render()
    {
        return view('livewire.user-form');
    }

    public function save()
    {
        $validated = $this->validate([
            'name' => 'required|min:10',
            'email' => 'required|email|min:10',
            'age' => 'required|integer',
            'address' => 'required|min:10',
        ]);

        $user = User::create(array_merge($validated, [
            'user_type' => 'user',
            'password' => bcrypt($this->email)
        ]));

        $this->resetForm();
        $this->dispatchBrowserEvent('user-saved', ['action' => 'created', 'user_name' => $user->name]);
        $this->emitTo('live-table', 'triggerRefresh');
    }

    public function resetForm()
    {
        $this->user_id = null;
        $this->name = null;
        $this->email = null;
        $this->age = null;
        $this->address = null;
    }
}
