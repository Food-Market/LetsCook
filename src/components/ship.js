import React from 'react';

function Ship () {
    return (
        <div className="body">
            <div class="background-capa-1"></div>
    <div class="background-capa-2"></div>
    <div class="background-capa-3"></div>
    <header>
        <nav class="nav1">
            <ul>
                <li>
                    OPTION 1
                </li>
                <li>
                    OPTION 2
                </li>
            </ul>
        </nav>
        <picture class="logo"></picture>
        <div class="second-logo"></div>
        <nav class="nav2">
            <ul>
                <li>
                    OPTION 3
                </li>
                <li>
                    OPTION 4
                </li>
            </ul>
        </nav>
        <h1 class="title">CONFIRM YOUR ORDER</h1>
        <h1 class="second-title">¡ORDER CHECKED!</h1>
        <h1 class="notify-message-on-header">We’ll notify you as soon we ship your order  </h1>
        <hr class="title-divisor" size="2px" color="#264653" />
    </header>
    <main>
        <h1 class="notify-message">We’ll notify you as soon we ship your order  </h1>
        <div class="main-button"><a href="./details.html">ORDER DETAILS</a></div>
        <section class="item">
            <picture class="item-image zucchini-soup"></picture>
            <div class="item-description">
                <ul>
                    <li>ZUCCHINI SOUP</li>
                    <li>Food Rations: 8 / Cook Time: 2 hours</li>
                    <li>$XXXX</li>
                </ul>
            </div>
        </section>
        <section class="item">
            <picture class="item-image fish-soup"></picture>
            <div class="item-description">
                <ul>
                    <li>FISH SOUP</li>
                    <li>Food Rations: 8 / Cook Time: 2 hours</li>
                    <li>$XXXX</li>
                </ul>
            </div>
        </section>
        <section class="item">
            <picture class="item-image carrot-soup"></picture>
            <div class="item-description">
                <ul>
                    <li>CARROT SOUP</li>
                    <li>Food Rations: 8 / Cook Time: 2 hours</li>
                    <li>$XXXX</li>
                </ul>
            </div>
        </section>
        <section class="item">
            <picture class="item-image tomato-soup"></picture>
            <div class="item-description">
                <ul>
                    <li>TOMATO SOUP</li>
                    <li>Food Rations: 8 / Cook Time: 2 hours</li>
                    <li>$XXXX</li>
                </ul>
            </div>
        </section>
        <section class="item hide" >
            <picture class="item-image carrot-soup"></picture>
            <div class="item-description">
                <ul>
                    <li>CARROT SOUP</li>
                    <li>Food Rations: 8 / Cook Time: 2 hours</li>
                    <li>$XXXX</li>
                </ul>
            </div>
        </section>
        <section class="item hide" >
            <picture class="item-image tomato-soup"></picture>
            <div class="item-description">
                <ul>
                    <li>TOMATO SOUP</li>
                    <li>Food Rations: 8 / Cook Time: 2 hours</li>
                    <li>$XXXX</li>
                </ul>
            </div>
        </section>
        <section class="item hide" >
            <picture class="item-image carrot-soup"></picture>
            <div class="item-description">
                <ul>
                    <li>CARROT SOUP</li>
                    <li>Food Rations: 8 / Cook Time: 2 hours</li>
                    <li>$XXXX</li>
                </ul>
            </div>
        </section>
        <section class="item hide" >
            <picture class="item-image tomato-soup"></picture>
            <div class="item-description">
                <ul>
                    <li>TOMATO SOUP</li>
                    <li>Food Rations: 8 / Cook Time: 2 hours</li>
                    <li>$XXXX</li>
                </ul>
            </div>
        </section>
    </main>
    <footer>
        <div class="second-logo-footer"></div>
        <h1 class="second-title-footer">¡ORDER CHECKED!</h1>
        <h1 class="notify-message-on-header-footer">We’ll notify you as soon we ship your order  </h1>
        <hr class="title-divisor-footer" size="2px" color="#264653"/>
        <div class="premium"><a href="http://">LET'S MEET OUR PREMIUM PLAN</a></div>
        <p class="home"><a href="">HOME</a></p>
        <section class="total">
            <p>TOTAL</p>
            <p>$ XXXX</p>
        </section>
        <section class="eldivisor">
            <hr size="2px" color="#dbe4ee"/>
        </section>
        <section class="choices">
            <p>ADD RECIPES</p>
            <hr size="2px" color="#dbe4ee" width="40px" class="choices-divisor"/>
            <p> PAY </p>
        </section>
    </footer>
        </div>
    );
}

export default Ship;