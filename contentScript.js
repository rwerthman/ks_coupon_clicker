
function timer( ms )
{
    return new Promise( resolve =>
        setTimeout( resolve, ms ) );
}

async function clickCoupons() {

    let coupons = document.getElementsByClassName( "CouponActionButton" );

    console.log( "Number of coupons found", coupons.length );

    var i;
    var numCoupons = coupons.length;

    console.log( "Clicking on coupons...");
    for( i = 0; i < numCoupons; i++ )
    {
        var coupon = coupons[i];

        if( "Clip" === coupon.textContent.trim() )
        {
            coupon.click();

            // Pause before the next click
            await timer( 1000 );
        }
    }

    console.log( "Done clicking on coupons!" );
}

clickCoupons();