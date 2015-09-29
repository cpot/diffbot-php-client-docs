��          �       L      L    M  r  b  Y   �     /  P   =  �   �  ^     �   ~  �   :     �  �  �  +   �  
   �  1   �     	  <   	     U	  �   d	  H  �	  !  4  �  V  Q        m  U   {  �   �  c   g  �   �  �   ~     
  �    4   �     �  1   �       B   %     h  �   x   Allows changing of HTTP clients used to send requests to the Diffbot API. Generally useful only during testing, but some edge cases may arise. This method does not need to be called for Diffbot to be usable - it will default to a new instance of the regular GuzzleHttp\Client. Allows for changing the entity factory in use when returning and processing Diffbot-provided data. A custom Entity Factory might, for example, return Author entities (also custom) for all calls to a custom API set up in a user's Diffbot account. This helps with getting fully consumable custom data right from the API source, rather than requiring additional processing. Alternatively, set the token globally, and instantiate without passing in the parameter:: Diffbot Class Name of the custom API as defined in the `Diffbot UI <https://diffbot.com/dev>`_ Name of the new crawljob. If omitted, activates read only mode and returns joint data about all defined crawljobs for the current Diffbot token. Returns either the instance token, or the globally defined one - or null if neither is defined The Diffbot class is the first instance a developer must create when using the client. It serves as a container for global settings, and as a factory for the various API endpoint classes. The Diffbot class takes a single optional argument, the ``$token``, which can be obtained `here <https://diffbot.com/pricing>`__. Instantiate like so:: The HTTP client. The crawl method is used to create new Crawlbot job (crawljob). To find out more about Crawlbot and what, how and why it does what it does, see `here <https://www.diffbot.com/dev/docs/crawl/>`__. I also recommend reading the `Crawlbot API docs <https://www.diffbot.com/dev/docs/crawl/api.jsp>`_ and the `Crawlbot support topics <http://support.diffbot.com/topics/crawlbot/>`_ just so you can dive right in without being too confused by the code below. The query to execute against the Search API The token. URL which is to be processed, or the word "crawl" Usage:: Useful for setting a default token for all future instances. null or string void, or throws an `\\InvalidArgumentException <http://php.net/manual/en/class.invalidargumentexception.php>`_ if the token is invalid Project-Id-Version: Diffbot PHP Client Documentation 1
Report-Msgid-Bugs-To: 
POT-Creation-Date: 2015-08-30 21:39+0000
PO-Revision-Date: YEAR-MO-DA HO:MI+ZONE
Last-Translator: FULL NAME <EMAIL@ADDRESS>
Language-Team: LANGUAGE <LL@li.org>
MIME-Version: 1.0
Content-Type: text/plain; charset=UTF-8
Content-Transfer-Encoding: 8bit
 Omogucava izmjenu HTTP klijenta koji se interno koristi za slanje poziva na Diffbot API. Namijenjeno za koristenje prilikom testiranja - nije od prevelike koristi izvan tog scenarija. Ovu se metodu ne treba zvati kako bi se Diffbot klasa mogla koristiti - default joj je GuzzleHttp\Client. Sluzi za izmjenu defaultne entity factory klase za neku drugu. Entity factory klasa sluzi za pretvaranje dobivenih Diffbot podataka u entitete koji imaju mogucnosti specificne za taj tip obradenih podataka. Na primjer, poseban Entity Factory mogao bi vracati Author entitete za Custom API koji sluzi za preuzimanje portfolija autora sa SitePoint.com. Time se dobivaju direktno iskoristivi podaci iz poziva Diffbotu, te nema potrebe za dodatnom obradom. Drugi pristup je da se setira token globalno, te instancira klasa bez parametra:: Diffbot klasa Ime Custom API-ja kao sto je prikazano u `Diffbot sucelju <https://diffbot.com/dev>`_ Ime novog crawljoba. U slucaju da ga se izostavi, aktivira se read-only nacin rada koji vraca podatke o svim crawljobovima na zadanom Diffbot tokenu. Vraca ili token zadane instance, ili globalno definirani token, ili null ukoliko nijedan ne postoji Diffbot klasa je prva klasa koju developer mora instancirati prilikom koristenja ovog klijenta. Sluzi kao globalni spremnik za konfiguraciju, te kao tvornica klasa raznih API-ja. Diffbot klasa prima jedan neobavezni parametar - ``$token`` - koji se dobiva `ovdje <https://diffbot.com/pricing>`__. Instancira se ovako:: HTTP klijent. Crawl metoda se koristi za kreiranje novog Crawlbot zadatka (crawljoba). Za vise informacija o Crawlbotu, te svemu sto, zasto i kako radi, vidi `ovdje <https://www.diffbot.com/dev/docs/crawl/>`__. Radi izbjegavanja nejasnoca, korisno je procitati i `Crawlbot API dokumentaciju <https://www.diffbot.com/dev/docs/crawl/api.jsp>`_, kao i `Crawlbot podrsku <http://support.diffbot.com/topics/crawlbot/>`_. Upit kojeg Search API treba izvrsiti na Diffbot bazi Token. URL koji bi se trebao obraditi, ili rijec "crawl" Koristenje:: Koristi se za podesiti token za sve buduce instance Diffbot klase. null ili string void, ili baca `\\InvalidArgumentException <http://php.net/manual/en/class.invalidargumentexception.php>`_ ako token nije dobrog formata 