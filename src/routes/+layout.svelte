<script>
    import '../app.postcss';
    import './styles.css';
    import Header from './Header.svelte';
    import Footer from '$lib/Footer.svelte';

</script>

<div class="app flex flex-col bg-center repeat absolute top-0 w-full bg-black !sm:!hidden">
   <Header />
    <main class="flex flex-col w-full">
        <slot/>33
    </main>
    <div class="flex justify-center items-center ">
        <a class="text-[#CAB089F9] text-center px-12" href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006688014"
           target="_blank">L'ABUS D'ALCOOL EST DANGEREUX POUR LA SANTÉ, À CONSOMMER AVEC MODÉRATION.</a>
    </div>
    <div class="!bg-transparent">
        <Footer/>
    </div>
    <div class="mobile-footer">
        <ul class="flex justify-center items-center text-white">
            <li class="m-2 mr-4 text-black">
                <a href="/contact"> Contact </a>
            </li>

            <li class="m-2 ml-4 text-black ">
                <a href="/about">À propos de nous</a>
            </li>
        </ul>
    </div>
</div>

<style>
    html {
        background: black;
    }

    .app {
        background: transparent;
        height: 100vh;
    }

    main {
        flex: 1;
        margin: 0 auto;
        box-sizing: border-box;
    }

    .mobile-footer {
        visibility: visible;
        font-size: small;
    }


    @media (max-width: 768px) {
        .footer {
            visibility: hidden;
        }
        
    }

    @media (min-width: 480px) {
        .footer {
            padding: 12px 0;
        }
        .mobile-footer {
            visibility: hidden;
        }
    }

    @media (max-width: 800px) {
      .app {
          background-color: black;
          background-attachment: fixed;
      }
    }
</style>
