<script setup lang="ts">

</script>

<template>
    <aside id="settingswrapper">

        <!-- At the end this part will be pushed in js depending the article -->

        <article id="themeSettings">
            <section>
                <label class="themeSelector" for="colorSelector">Color:</label>
                <select hidden name="colorSelector" id="colorSelector">
                    <option value="37,89,179">Sapphire</option>
                    <option value="104,107,108">Silk</option>
                    <option value="26,115,115">Turquoise</option>
                    <option value="20,101,50">Emerald</option>
                    <option value="160,120,0">Gold</option>
                    <option value="116,15,48">Ruby</option>
                    <option value="118,6,135">Amethyst</option>
                    <option value="192,114,40">Amber</option>
                </select>

                <div class="themewrapper">
                    <img src="/colors/sapphire.png" alt="sapphire_icon">
                    <p>Sapphire</p>
                </div>

                <div class="themewrapper">
                    <img src="/colors/silk.png" alt="silk_icon">
                    <p>Silk</p>
                </div>

                <div class="themewrapper">
                    <img src="/colors/turquoise.png" alt="turquoise_icon">
                    <p>Turquoise</p>
                </div>

                <div class="themewrapper">
                    <img src="/colors/emerald.png" alt="emerald_icon">
                    <p>Emerald</p>
                </div>

                <div class="themewrapper">
                    <img src="/colors/gold.png" alt="gold_icon">
                    <p>Gold</p>
                </div>

                <div class="themewrapper">
                    <img src="/colors/ruby.png" alt="ruby_icon">
                    <p>Ruby</p>
                </div>

                <div class="themewrapper">
                    <img src="/colors/amethyst.png" alt="amethyst_icon">
                    <p>Amethyst</p>
                </div>

                <div class="themewrapper">
                    <img src="/colors/amber.png" alt="amber_icon">
                    <p>Amber</p>
                </div>

            </section>

            <section>
                <label class="themeSelector" for="particlesSelector">Particles:</label>
                <input hidden type="checkbox" id="particlesSelector" name="particlesSelector" checked>
                <div class="themewrapper">
                    <p id="onbtn">ON</p>
                    <p id="offbtn">OFF</p>
                </div>
            </section>

            <section>
                <label class="themeSelector" for="brightnessSelector">Brightness:</label>
                <input hidden type="range" id="brightnessSelector" name="brightnessSelector" min="0.05" max="1.35"
                    step="0.1" value="1.15">

                <div class="brightnessTriggers">
                    <div class="themewrapper">
                        <p id="rm_bright"> - </p>
                    </div>
                    /
                    <div class="themewrapper">
                        <p id="add_bright"> + </p>
                    </div>
                </div>

            </section>
        </article>

        <article id="soundSettings">
            <section>
                <label for="soundSelector">Sounds:</label>
                <input hidden type="checkbox" id="soundSelector" name="soundSelector" checked>
                <div class="soundwrapper">
                    <p id="onbtnsound">ON</p>
                    <p id="offbtnsound">OFF</p>
                </div>
            </section>
        </article>

        <article id="dateSettings">

            <section>
                <label for="dateSelector">Date format :</label>
                <select hidden name="dateSelector" id="dateSelector">
                    <option value="dd:mm:yyyy">FR</option>
                    <option value="dd:mm:yyyy">US</option>
                </select>

                <div class="datewrapper">
                    <p>dd:mm</p>
                </div>

                <div class="datewrapper">
                    <p>mm:dd</p>
                </div>
            </section>

            <section>
                <label for="timeSelector">Time format :</label>
                <select hidden name="timeSelector" id="timeSelector">
                    <option>12</option>
                    <option>24</option>
                </select>

                <div class="datewrapper">
                    <p>12</p>
                </div>

                <div class="datewrapper">
                    <p>24</p>
                </div>
            </section>

        </article>
    </aside>
</template>

<style scoped lang="sass">

    #settingswrapper
        opacity: 0
        visibility: visible
        position: fixed
        top: 0
        right: 0
        width: 30%
        height: 100%
        background: rgb(255,255,255)
        background: linear-gradient(90deg, rgba(255,255,255,0.2) 0%, rgba(0,0,0,0.01) 100%)
        transition: opacity ease .1s

        article
            position: absolute
            top: 40%
            margin: 10px 0 10px 25px

    #settingswrapper::before
        content: ""
        position: absolute
        height: 100%
        width: 4px
        background: black
        background: linear-gradient(to bottom, rgba(80,80,80,0.4) 0%, rgba(255,255,255,1) 50%, rgba(80,80,80,0.4) 100%)
        filter: drop-shadow(6px 0px 10px #000)

    .themewrapper
        display: flex

        img
            height: 25px
            width: 25px
            margin-right: 15px

    #offbtn, #offbtnsound
        visibility: hidden
        position: absolute

    .brightnessTriggers
        display: flex

        p
            opacity: 1
            font-size: 25px

</style>