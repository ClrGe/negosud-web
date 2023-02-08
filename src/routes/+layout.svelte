<script>
    import '../app.postcss';
    import './styles.css';
    import Header from '../Components/Header.svelte';
    import Footer from '../Components/Footer.svelte';
</script>

<div class="app flex flex-col bg-center repeat absolute top-0 w-full h-screen bg-black">
    <Header/>

    <main class="flex flex-col w-full">
        <slot/>
    </main>
    <div class="flex justify-center items-center">
        <a class="text-[#CAB089F9]" href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006688014"
           target="_blank">L'ABUS D'ALCOOL EST DANGEREUX POUR LA SANTÉ, À CONSOMMER AVEC MODÉRATION.</a>
    </div>
    <Footer/>
</div>

<style>
    html {
        background: black;
    }

    .app {
        background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("src/lib/images/hero.png");
        background-attachment: scroll;
    }

    main {
        flex: 1;
        margin: 0 auto;
        box-sizing: border-box;
    }

    footer {
        background: linear-gradient(rgb(0 0 0 / 0%), rgb(0 0 0));
    }

    @media (min-width: 480px) {
        footer {
            padding: 12px 0;
        }
    }
</style>
