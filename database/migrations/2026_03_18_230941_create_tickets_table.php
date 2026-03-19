<?php

use App\Models\Department;
use App\Models\HelpTopic;
use App\Models\Priority;
use App\Models\SlaPlan;
use App\Models\Status;
use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tickets', function (Blueprint $table) {
            $table->id();
            $table->string('code',40);
            $table->date('creation_date');
            $table->string('email', 100);
            $table->string('subject', 200);
            $table->text('message');
            $table->string('attach', 255);
            $table->date('expiration_date');
            $table->date('closing_date');
            $table->foreignIdFor(User::class, 'requesting_user');
            $table->foreignIdFor(User::class, 'assigned_user')->nullable();
            $table->foreignIdFor(HelpTopic::class);
            $table->foreignIdFor(Priority::class);
            $table->foreignIdFor(SlaPlan::class);
            $table->foreignIdFor(Department::class);
            $table->foreignIdFor(Status::class);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tickets');
    }
};
