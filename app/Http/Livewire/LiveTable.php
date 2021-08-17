<?php

namespace App\Http\Livewire;

use Livewire\Component;
use Livewire\WithPagination;
use App\Models\User;

class LiveTable extends Component
{
    use WithPagination;

    
    public $sortField = 'name'; // default sorting field
    public $sortAsc = true; // default sort direction
    public $search = '';
    
    protected $listeners = ['delete', 'triggerRefresh' => '$refresh'];

    public function sortBy($field)
    {
        if ($this->sortField === $field) {
            $this->sortAsc = !$this->sortAsc;
        } else {
            $this->sortAsc = true;
        }

        $this->sortField = $field;
    }

    public function render()
    {
        return view('livewire.live-table', [
            'users' => User::search($this->search)
                ->orderBy($this->sortField, $this->sortAsc ? 'asc' : 'desc')
                ->simplePaginate(10),
        ]);
    }

    public function delete($id)
    {
        $user = User::find($id);
        $user->delete();
        $this->dispatchBrowserEvent('user-deleted', ['user_name' => $user->name]);
    }

}
