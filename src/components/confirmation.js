import React from 'react';

function Confirmation () {
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
            <hr class="title-divisor" />
        </header>
        <main>
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
            <section class="item hide">
                <picture class="item-image carrot-soup"></picture>
                <div class="item-description">
                    <ul>
                        <li>CARROT SOUP</li>
                        <li>Food Rations: 8 / Cook Time: 2 hours</li>
                        <li>$XXXX</li>
                    </ul>
                </div>
            </section>
            <section class="item hide">
                <picture class="item-image tomato-soup"></picture>
                <div class="item-description">
                    <ul>
                        <li>TOMATO SOUP</li>
                        <li>Food Rations: 8 / Cook Time: 2 hours</li>
                        <li>$XXXX</li>
                    </ul>
                </div>
            </section>
            <section class="item hide">
                <picture class="item-image carrot-soup"></picture>
                <div class="item-description">
                    <ul>
                        <li>CARROT SOUP</li>
                        <li>Food Rations: 8 / Cook Time: 2 hours</li>
                        <li>$XXXX</li>
                    </ul>
                </div>
            </section>
            <section class="item hide">
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
            <section class="total">
                <p>TOTAL</p>
                <p>$ XXXX</p>
            </section>
            <section class="eldivisor">
                <hr size="2px" color="#dbe4ee" />
            </section>
            <section class="choices">
                <p>ADD RECIPES</p>
                <hr
                    size="2px"
                    color="#dbe4ee"
                    width="40px"
                    class="choices-divisor"
                />
                <p>PAY</p>
            </section>
        </footer>
        </div>
    )
}

export default Confirmation;