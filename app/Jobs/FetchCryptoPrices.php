<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use App\Events\ObtainedPrices;
use Carbon\Carbon;
use GuzzleHttp\Client;

class FetchCryptoPrices implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {

        $client = new Client();

        $url = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP,LTC,BCH&tsyms=GBP&api_token=" . config('services.crypto_compare.key');

        $response = $client->request('GET', $url);

        $prices = json_decode($response->getBody()->getContents(), true);

        $prices['timestamp'] = Carbon::now()->toIso8601String();

        // store prices in DB
        logger('prices obtained');
        event(new ObtainedPrices($prices));

    }
}
