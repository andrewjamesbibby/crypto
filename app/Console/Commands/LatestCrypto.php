<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Jobs\FetchCryptoPrices;

class LatestCrypto extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'crypto:latest';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Retrieves the latest crypto currency information';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        logger('crypto command fired');
        dispatch(new FetchCryptoPrices());
    }
}
