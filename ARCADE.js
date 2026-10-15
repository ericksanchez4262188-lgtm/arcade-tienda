const steamPriceSnapshot = {
      "105600": { price: 4.87, oldPrice: 9.75, discount: 50 },
      "588650": { price: 24.99 },
      "268910": { price: 19.99 },
      "387290": { price: 19.99 },
      "632360": { price: 8.24, oldPrice: 24.99, discount: 67 },
      "292030": { price: 49.99 },
      "1086940": { price: 59.99 },
      "1245620": { price: 59.99 },
      "1091500": { price: 17.99, oldPrice: 59.99, discount: 70 },
      "489830": { price: 39.99 },
      "1174180": { price: 14.99, oldPrice: 59.99, discount: 75 },
      "570": { price: 0 },
      "730": { price: 0 },
      "440": { price: 0 },
      "1172470": { price: 0 },
      "230410": { price: 0 },
      "1085660": { price: 0 },
      "359550": { price: 0 },
      "578080": { price: 0 },
      "550": { price: 9.69 },
      "220": { price: 9.69 },
      "8870": { price: 29.99 },
      "400": { price: 9.69 },
      "304430": { price: 22.99 },
      "48000": { price: 11.49 },
      "1426210": { price: 39.99 },
      "1222700": { price: 29.99 },
      "728880": { price: 22.99 },
      "739630": { price: 18.99 },
      "2050650": { price: 39.99 },
      "883710": { price: 39.99 },
      "57300": { price: 19.50 },
      "238320": { price: 14.79 },
      "264710": { price: 29.99 },
      "275850": { price: 58.99 },
      "892970": { price: 29.99 },
      "252490": { price: 39.99 },
      "242760": { price: 16.79 },
      "427520": { price: 32.00 },
      "526870": { price: 38.99 },
      "294100": { price: 31.99 },
      "255710": { price: 27.99 },
      "289070": { price: 59.99 },
      "268500": { price: 19.99 },
      "1142710": { price: 8.99, oldPrice: 59.99, discount: 85 },
      "813780": { price: 32.99 },
      "1551360": { price: 59.99 },
      "227300": { price: 19.99 },
      "1250410": { price: 24.49, oldPrice: 69.99, discount: 65 },
      "1222670": { price: 0 },
      "703080": { price: 44.99 },
      "2878980": { price: 69.99 },
      "814380": { price: 29.99, oldPrice: 59.99, discount: 50 },
      "601150": { price: 7.49, oldPrice: 29.99, discount: 75 },
      "582010": { price: 29.99 },
      "2138710": { price: 9.99, oldPrice: 39.99, discount: 75 },
      "753640": { price: 11.49, oldPrice: 22.99, discount: 50 },
      "1172620": { price: 39.99 },
      "1055540": { price: 3.62, oldPrice: 6.59, discount: 45 },
      "837470": { price: 18.99 },
      "632470": { price: 37.99 },
      "435150": { price: 44.99 },
      "1687950": { price: 59.99 },
      "2054970": { price: 39.99 },
      "281990": { price: 49.99 },
      "1158310": { price: 14.99, oldPrice: 49.99, discount: 70 },
      "1677280": { price: 54.99 },
      "1466860": { price: 39.99 },
      "1290000": { price: 24.99 },
      "613100": { price: 24.50 },
      "493340": { price: 37.99 },
      "535930": { price: 7.49, oldPrice: 29.99, discount: 75 },
      "244210": { price: 19.99 },
      "1222680": { price: 69.99 },
      "690790": { price: 19.99 },
      "210970": { price: 36.99 },
      "835960": { price: 2.89, oldPrice: 28.99, discount: 90 },
      "239030": { price: 9.75 },
      "1057090": { price: 29.99 },
      "250760": { price: 31.99, oldPrice: 39.99, discount: 20 },
      "253230": { price: 28.99 },
      "1693980": { price: 59.99 },
      "601430": { price: 29.99 },
      "860510": { price: 29.99 },
      "305620": { price: 4.24, oldPrice: 16.99, discount: 75 },
      "815370": { price: 2.39, oldPrice: 23.99, discount: 90 },
      "962130": { price: 39.99 },
      "1794680": { price: 3.74, oldPrice: 4.99, discount: 25 },
      "2379780": { price: 13.99 },
      "1145350": { price: 28.99 },
      "1313140": { price: 11.49, oldPrice: 22.99, discount: 50 },
      "1337520": { price: 7.49, oldPrice: 14.99, discount: 50 },
      "271590": { price: 29.99, oldPrice: 59.99, discount: 50 },
      "2488620": { price: 29.99, oldPrice: 59.99, discount: 50 },
      "2252570": { price: 29.99, oldPrice: 59.99, discount: 50 }
    };
    const games = [
      { id: "stardew", steamId: "413150", title: "Stardew Valley", genre: "Simulación", studio: "ConcernedApe", price: 13.99 },
      { id: "hades", steamId: "1145360", title: "Hades", genre: "Acción", studio: "Supergiant Games", price: 24.50 },
      { id: "gta-v", steamId: "271590", title: "Grand Theft Auto V", genre: "Aventura", studio: "Rockstar North", localDescription: "Vive las historias entrelazadas de Michael, Franklin y Trevor en Los Santos. Explora la ciudad, cambia entre sus protagonistas y prepara golpes en una aventura de mundo abierto.", tags: ["Tendencia", "Ofertas"] },
      { id: "hollow-knight", steamId: "367520", title: "Hollow Knight", genre: "Aventura", studio: "Team Cherry", price: 14.79 },
      { id: "portal-2", steamId: "620", title: "Portal 2", genre: "Puzles", studio: "Valve", price: 9.69 },
      { id: "celeste", steamId: "504230", title: "Celeste", genre: "Plataformas", studio: "Maddy Makes Games", price: 4.74, oldPrice: 18.99, discount: 75, tags: ["Ofertas"] },
      { id: "slay-the-spire", steamId: "646570", title: "Slay the Spire", genre: "Cartas", studio: "Mega Crit", price: 22.99 },
      { id: "terraria", steamId: "105600", title: "Terraria", genre: "Sandbox", studio: "Re-Logic" },
      { id: "dead-cells", steamId: "588650", title: "Dead Cells", genre: "Roguelike", studio: "Motion Twin", localDescription: "Explora una isla en constante cambio en este roguelike de acción y plataformas. Combina armas, habilidades y mejoras en cada intento mientras descubres los secretos del reino." },
      { id: "cuphead", steamId: "268910", title: "Cuphead", genre: "Plataformas", studio: "Studio MDHR" },
      { id: "ori-definitive", steamId: "387290", title: "Ori and the Blind Forest: Definitive Edition", genre: "Plataformas", studio: "Moon Studios" },
      { id: "risk-of-rain-2", steamId: "632360", title: "Risk of Rain 2", genre: "Roguelike", studio: "Hopoo Games" },
      { id: "witcher-3", steamId: "292030", title: "The Witcher 3: Wild Hunt", genre: "Rol", studio: "CD PROJEKT RED" },
      { id: "baldurs-gate-3", steamId: "1086940", title: "Baldur's Gate 3", genre: "Rol", studio: "Larian Studios" },
      { id: "elden-ring", steamId: "1245620", title: "ELDEN RING", genre: "Rol", studio: "FromSoftware" },
      { id: "cyberpunk-2077", steamId: "1091500", title: "Cyberpunk 2077", genre: "Rol", studio: "CD PROJEKT RED" },
      { id: "skyrim-se", steamId: "489830", title: "The Elder Scrolls V: Skyrim Special Edition", genre: "Rol", studio: "Bethesda Game Studios" },
      { id: "red-dead-2", steamId: "1174180", title: "Red Dead Redemption 2", genre: "Aventura", studio: "Rockstar Games" },
      { id: "dota-2", steamId: "570", title: "Dota 2", genre: "MOBA", studio: "Valve" },
      { id: "counter-strike-2", steamId: "730", title: "Counter-Strike 2", genre: "FPS", studio: "Valve" },
      { id: "team-fortress-2", steamId: "440", title: "Team Fortress 2", genre: "FPS", studio: "Valve" },
      { id: "apex-legends", steamId: "1172470", title: "Apex Legends", genre: "Battle Royale", studio: "Respawn Entertainment" },
      { id: "warframe", steamId: "230410", title: "Warframe", genre: "Acción", studio: "Digital Extremes" },
      { id: "destiny-2", steamId: "1085660", title: "Destiny 2", genre: "FPS", studio: "Bungie" },
      { id: "rainbow-six-siege", steamId: "359550", title: "Tom Clancy's Rainbow Six Siege", genre: "FPS táctico", studio: "Ubisoft Montreal" },
      { id: "pubg", steamId: "578080", title: "PUBG: BATTLEGROUNDS", genre: "Battle Royale", studio: "KRAFTON" },
      { id: "left-4-dead-2", steamId: "550", title: "Left 4 Dead 2", genre: "FPS", studio: "Valve" },
      { id: "half-life-2", steamId: "220", title: "Half-Life 2", genre: "FPS", studio: "Valve" },
      { id: "bioshock-infinite", steamId: "8870", title: "BioShock Infinite", genre: "FPS", studio: "Irrational Games" },
      { id: "portal", steamId: "400", title: "Portal", genre: "Puzles", studio: "Valve" },
      { id: "inside", steamId: "304430", title: "INSIDE", genre: "Aventura", studio: "Playdead" },
      { id: "limbo", steamId: "48000", title: "LIMBO", genre: "Puzles", studio: "Playdead" },
      { id: "it-takes-two", steamId: "1426210", title: "It Takes Two", genre: "Cooperativo", studio: "Hazelight Studios" },
      { id: "a-way-out", steamId: "1222700", title: "A Way Out", genre: "Cooperativo", studio: "Hazelight Studios" },
      { id: "overcooked-2", steamId: "728880", title: "Overcooked! 2", genre: "Fiesta", studio: "Ghost Town Games" },
      { id: "phasmophobia", steamId: "739630", title: "Phasmophobia", genre: "Terror", studio: "Kinetic Games" },
      { id: "resident-evil-4", steamId: "2050650", title: "Resident Evil 4", genre: "Terror", studio: "CAPCOM" },
      { id: "resident-evil-2", steamId: "883710", title: "Resident Evil 2", genre: "Terror", studio: "CAPCOM" },
      { id: "amnesia-dark-descent", steamId: "57300", title: "Amnesia: The Dark Descent", genre: "Terror", studio: "Frictional Games" },
      { id: "outlast", steamId: "238320", title: "Outlast", genre: "Terror", studio: "Red Barrels" },
      { id: "subnautica", steamId: "264710", title: "Subnautica", genre: "Supervivencia", studio: "Unknown Worlds" },
      { id: "no-mans-sky", steamId: "275850", title: "No Man's Sky", genre: "Supervivencia", studio: "Hello Games" },
      { id: "valheim", steamId: "892970", title: "Valheim", genre: "Supervivencia", studio: "Iron Gate AB" },
      { id: "rust", steamId: "252490", title: "Rust", genre: "Supervivencia", studio: "Facepunch Studios" },
      { id: "the-forest", steamId: "242760", title: "The Forest", genre: "Supervivencia", studio: "Endnight Games" },
      { id: "factorio", steamId: "427520", title: "Factorio", genre: "Estrategia", studio: "Wube Software" },
      { id: "satisfactory", steamId: "526870", title: "Satisfactory", genre: "Simulación", studio: "Coffee Stain Studios" },
      { id: "rimworld", steamId: "294100", title: "RimWorld", genre: "Simulación", studio: "Ludeon Studios" },
      { id: "cities-skylines", steamId: "255710", title: "Cities: Skylines", genre: "Simulación", studio: "Colossal Order" },
      { id: "civilization-6", steamId: "289070", title: "Sid Meier's Civilization VI", genre: "Estrategia", studio: "Firaxis Games" },
      { id: "xcom-2", steamId: "268500", title: "XCOM 2", genre: "Estrategia", studio: "Firaxis Games" },
      { id: "total-war-warhammer-3", steamId: "1142710", title: "Total War: WARHAMMER III", genre: "Estrategia", studio: "Creative Assembly" },
      { id: "aoe2-definitive", steamId: "813780", title: "Age of Empires II: Definitive Edition", genre: "Estrategia", studio: "Forgotten Empires" },
      { id: "f1-24", steamId: "2488620", title: "F1 24", genre: "Carreras", studio: "Codemasters", tags: ["Tendencia", "Ofertas"] },
      { id: "forza-horizon-5", steamId: "1551360", title: "Forza Horizon 5", genre: "Carreras", studio: "Playground Games" },
      { id: "euro-truck-2", steamId: "227300", title: "Euro Truck Simulator 2", genre: "Simulación", studio: "SCS Software" },
      { id: "flight-simulator", steamId: "1250410", title: "Microsoft Flight Simulator", genre: "Simulación", studio: "Asobo Studio" },
      { id: "the-sims-4", steamId: "1222670", title: "The Sims 4", genre: "Simulación", studio: "Maxis" },
      { id: "planet-zoo", steamId: "703080", title: "Planet Zoo", genre: "Simulación", studio: "Frontier Developments" },
      { id: "football-manager-2024", steamId: "2252570", title: "Football Manager 2024", genre: "Deportes", studio: "Sports Interactive", tags: ["Tendencia", "Ofertas"] },
      { id: "nba-2k25", steamId: "2878980", title: "NBA 2K25", genre: "Deportes", studio: "Visual Concepts" },
      { id: "sekiro", steamId: "814380", title: "Sekiro: Shadows Die Twice", genre: "Acción", studio: "FromSoftware" },
      { id: "devil-may-cry-5", steamId: "601150", title: "Devil May Cry 5", genre: "Acción", studio: "CAPCOM" },
      { id: "monster-hunter-world", steamId: "582010", title: "Monster Hunter: World", genre: "Acción", studio: "CAPCOM" },
      { id: "sifu", steamId: "2138710", title: "Sifu", genre: "Acción", studio: "Sloclap" },
      { id: "outer-wilds", steamId: "753640", title: "Outer Wilds", genre: "Aventura", studio: "Mobius Digital" },
      { id: "sea-of-thieves", steamId: "1172620", title: "Sea of Thieves", genre: "Aventura", studio: "Rare Ltd" },
      { id: "a-short-hike", steamId: "1055540", title: "A Short Hike", genre: "Aventura", studio: "adamgryu" },
      { id: "untitled-goose-game", steamId: "837470", title: "Untitled Goose Game", genre: "Aventura", studio: "House House" },
      { id: "disco-elysium", steamId: "632470", title: "Disco Elysium - The Final Cut", genre: "Rol", studio: "ZA/UM" },
      { id: "divinity-original-sin-2", steamId: "435150", title: "Divinity: Original Sin 2", genre: "Rol", studio: "Larian Studios" },
      { id: "persona-5-royal", steamId: "1687950", title: "Persona 5 Royal", genre: "Rol", studio: "ATLUS" },
      { id: "dragons-dogma-2", steamId: "2054970", title: "Dragon's Dogma 2", genre: "Rol", studio: "CAPCOM" },
      { id: "stellaris", steamId: "281990", title: "Stellaris", genre: "Estrategia", studio: "Paradox Development Studio" },
      { id: "crusader-kings-3", steamId: "1158310", title: "Crusader Kings III", genre: "Estrategia", studio: "Paradox Development Studio" },
      { id: "company-of-heroes-3", steamId: "1677280", title: "Company of Heroes 3", genre: "Estrategia", studio: "Relic Entertainment" },
      { id: "age-of-empires-4", steamId: "1466860", title: "Age of Empires IV", genre: "Estrategia", studio: "Relic Entertainment" },
      { id: "powerwash-simulator", steamId: "1290000", title: "PowerWash Simulator", genre: "Simulación", studio: "FuturLab" },
      { id: "house-flipper", steamId: "613100", title: "House Flipper", genre: "Simulación", studio: "Frozen District" },
      { id: "planet-coaster", steamId: "493340", title: "Planet Coaster", genre: "Simulación", studio: "Frontier Developments" },
      { id: "two-point-hospital", steamId: "535930", title: "Two Point Hospital", genre: "Simulación", studio: "Two Point Studios" },
      { id: "assetto-corsa", steamId: "244210", title: "Assetto Corsa", genre: "Carreras", studio: "Kunos Simulazioni" },
      { id: "need-for-speed-heat", steamId: "1222680", title: "Need for Speed Heat", genre: "Carreras", studio: "Ghost Games" },
      { id: "dirt-rally-2", steamId: "690790", title: "DiRT Rally 2.0", genre: "Carreras", studio: "Codemasters" },
      { id: "the-witness", steamId: "210970", title: "The Witness", genre: "Puzles", studio: "Thekla, Inc." },
      { id: "talos-principle-2", steamId: "835960", title: "The Talos Principle 2", genre: "Puzles", studio: "Croteam" },
      { id: "papers-please", steamId: "239030", title: "Papers, Please", genre: "Puzles", studio: "Lucas Pope" },
      { id: "ori-will-of-the-wisps", steamId: "1057090", title: "Ori and the Will of the Wisps", genre: "Plataformas", studio: "Moon Studios" },
      { id: "shovel-knight-treasure-trove", steamId: "250760", title: "Shovel Knight: Treasure Trove", genre: "Plataformas", studio: "Yacht Club Games" },
      { id: "a-hat-in-time", steamId: "253230", title: "A Hat in Time", genre: "Plataformas", studio: "Gears for Breakfast" },
      { id: "dead-space-remake", steamId: "1693980", title: "Dead Space", genre: "Terror", studio: "Motive" },
      { id: "evil-within-2", steamId: "601430", title: "The Evil Within 2", genre: "Terror", studio: "Tango Gameworks" },
      { id: "little-nightmares-2", steamId: "860510", title: "Little Nightmares II", genre: "Terror", studio: "Tarsier Studios" },
      { id: "the-long-dark", steamId: "305620", title: "The Long Dark", genre: "Supervivencia", studio: "Hinterland Studio" },
      { id: "green-hell", steamId: "815370", title: "Green Hell", genre: "Supervivencia", studio: "Creepy Jar" },
      { id: "grounded", steamId: "962130", title: "Grounded", genre: "Supervivencia", studio: "Obsidian Entertainment" },
      { id: "vampire-survivors", steamId: "1794680", title: "Vampire Survivors", genre: "Roguelike", studio: "poncle" },
      { id: "balatro", steamId: "2379780", title: "Balatro", genre: "Roguelike", studio: "LocalThunk" },
      { id: "hades-2", steamId: "1145350", title: "Hades II", genre: "Roguelike", studio: "Supergiant Games" },
      { id: "cult-of-the-lamb", steamId: "1313140", title: "Cult of the Lamb", genre: "Roguelike", studio: "Massive Monster" },
      { id: "risk-of-rain-returns", steamId: "1337520", title: "Risk of Rain Returns", genre: "Roguelike", studio: "Hopoo Games" }
    ].map(game => ({ ...game, ...(steamPriceSnapshot[game.steamId] || {}), price: steamPriceSnapshot[game.steamId]?.price ?? game.price ?? null, oldPrice: steamPriceSnapshot[game.steamId]?.oldPrice ?? game.oldPrice ?? 0, discount: steamPriceSnapshot[game.steamId]?.discount ?? game.discount ?? 0, tags: game.tags || ["Tendencia"], storeUrl: `https://store.steampowered.com/app/${game.steamId}/?cc=es&l=spanish` }));
    const genres = ["Todos", ...new Set(games.map(game => game.genre))];
    const imageUrl = (game) => game.steamData?.header_image || `https://cdn.akamai.steamstatic.com/steam/apps/${game.steamId}/header.jpg`;
    const readStore = (key) => { try { return JSON.parse(localStorage.getItem(key) || "{}"); } catch { return {}; } };
    let cart = readStore("arcade-cart-v1");
    let wishlist = readStore("arcade-wishlist-v1");
    let activeGenre = "Todos";
    let activeCollection = "Todos";
    let wishlistOnly = false;
    const grid = document.getElementById("gameGrid");
    const escapeHtml = (text) => text.replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
    const money = (amount) => new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR" }).format(amount);
    function persist() {
      localStorage.setItem("arcade-cart-v1", JSON.stringify(cart));
      localStorage.setItem("arcade-wishlist-v1", JSON.stringify(wishlist));
    }
    function visibleGames() {
      const query = document.getElementById("searchInput").value.trim().toLocaleLowerCase("es");
      let items = games.filter(game => {
        const matchesQuery = `${game.title} ${game.genre} ${game.studio}`.toLocaleLowerCase("es").includes(query);
        return matchesQuery && (activeGenre === "Todos" || game.genre === activeGenre) && (activeCollection === "Todos" || game.tags.includes(activeCollection)) && (!wishlistOnly || wishlist[game.id]);
      });
      const sort = document.getElementById("sortSelect").value;
      if (sort === "price-low") items.sort((a, b) => (a.price ?? Infinity) - (b.price ?? Infinity));
      if (sort === "price-high") items.sort((a, b) => (b.price ?? -Infinity) - (a.price ?? -Infinity));
      if (sort === "name") items.sort((a, b) => a.title.localeCompare(b.title, "es"));
      return items;
    }
    function renderGames() {
      const items = visibleGames();
      document.getElementById("resultCount").textContent = `${items.length} ${items.length === 1 ? "juego" : "juegos"}`;
      grid.innerHTML = items.length ? items.map(game => `<article class="game-card" data-game-id="${game.id}">
        <div class="cover"><button type="button" class="cover-open" data-details="${game.id}" aria-label="Ver detalles de ${escapeHtml(game.title)}"><img src="${imageUrl(game)}" alt="Portada de ${escapeHtml(game.title)}" loading="lazy"></button><button type="button" class="wishlist ${wishlist[game.id] ? "saved" : ""}" data-wishlist="${game.id}" aria-label="${wishlist[game.id] ? "Quitar de" : "Añadir a"} favoritos" title="${wishlist[game.id] ? "Quitar de favoritos" : "Añadir a favoritos"}"><svg width="17" height="17" viewBox="0 0 24 24" fill="${wishlist[game.id] ? "currentColor" : "none"}" stroke="currentColor" stroke-width="1.8"><path d="M20.8 4.6a5.4 5.4 0 0 0-7.6 0L12 5.8l-1.2-1.2a5.4 5.4 0 0 0-7.6 7.6l1.2 1.2L12 21l7.6-7.6 1.2-1.2a5.4 5.4 0 0 0 0-7.6Z"/></svg></button>${game.discount ? `<span class="discount">-${game.discount}%</span>` : ""}</div>
        <div class="game-info"><h3 class="game-title" title="${escapeHtml(game.title)}">${escapeHtml(game.title)}</h3><span class="game-genre">${escapeHtml(game.genre)} · ${escapeHtml(game.studio)}</span><div class="game-bottom"><span class="price">${game.price == null ? `<a class="price-link" href="${game.storeUrl}" target="_blank" rel="noreferrer">Consultar en Steam</a>` : game.price === 0 ? "Gratis" : `${game.oldPrice ? `<span class="old-price">${money(game.oldPrice)}</span>` : ""}${money(game.price)}`}</span>${game.price == null ? "" : `<button class="add-button" data-add="${game.id}" aria-label="Añadir ${escapeHtml(game.title)} al carrito" title="Añadir al carrito"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg></button>`}</div></div>
        <div class="game-hover-info" aria-hidden="true"><img class="game-hover-image" data-hover-image src="${imageUrl(game)}" alt=""><h3 class="game-hover-title">${escapeHtml(game.title)}</h3><p class="game-hover-meta">${escapeHtml(game.genre)} · ${escapeHtml(game.studio)}</p><p class="game-hover-description" data-hover-description>${escapeHtml(game.shortDescription || "")}</p><p class="game-hover-price">${game.price == null ? "Consultar precio" : game.price === 0 ? "Gratis" : money(game.price)}</p></div>
      </article>`).join("") : `<div class="empty-state">No encontramos juegos con esos filtros.<br>Prueba otra búsqueda o categoría.</div>`;
    }
    function renderGenres() {
      document.getElementById("genreTabs").innerHTML = genres.map(genre => `<button class="genre-tab ${activeGenre === genre ? "active" : ""}" data-genre="${genre}">${genre}</button>`).join("");
    }
    const gameDialog = document.getElementById("gameDialog");
    let activeDetailsGame = null;
    let activeHls = null;
    function parseRequirements(markup) {
      if (typeof markup !== "string") return [];
      const parsed = new DOMParser().parseFromString(markup, "text/html");
      return [...parsed.querySelectorAll("li")].map(item => {
        const text = item.textContent.replace(/\s+/g, " ").trim();
        const separator = text.indexOf(":");
        return separator < 0 ? ["", text] : [text.slice(0, separator).replace(/\*$/, "").trim(), text.slice(separator + 1).trim()];
      }).filter(([, value]) => value);
    }
    function requirementRows(markup, title) {
      const rows = parseRequirements(markup);
      const content = rows.length ? `<dl class="requirements-list">${rows.map(([label, value]) => `<div class="requirement-row"><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>`).join("")}</dl>` : `<p class="spec-intro">Requisitos técnicos no disponibles en esta ficha.</p>`;
      return `<section class="requirements-block"><h3>${escapeHtml(title)}</h3>${content}</section>`;
    }
    async function loadSteamData(game, shouldRender = true) {
      if (game.steamData) return game.steamData;
      const apiBase = location.protocol === "file:" ? "http://127.0.0.1:8765" : "";
      const response = await fetch(`${apiBase}/api/game?id=${encodeURIComponent(game.steamId)}`);
      if (!response.ok) throw new Error("No se pudo consultar Steam.");
      const payload = await response.json();
      const entry = payload[game.steamId];
      if (!entry?.success || !entry.data) throw new Error("La ficha no está disponible en Steam.");
      const data = entry.data;
      game.steamData = data;
      game.studio = (data.developers || [])[0] || game.studio;
      game.header = data.header_image || "";
      if (data.is_free) game.price = 0;
      else if (data.price_overview?.final != null) {
        game.price = data.price_overview.final / 100;
        game.oldPrice = data.price_overview.initial > data.price_overview.final ? data.price_overview.initial / 100 : 0;
        game.discount = data.price_overview.discount_percent || 0;
        if (game.discount && !game.tags.includes("Ofertas")) game.tags.push("Ofertas");
      }
      if (shouldRender) {
        renderGames();
        renderCart();
      }
      return data;
    }
    let hoverSummaryTimer = null;
    let hoverImageTimer = null;
    function stopHoverImageRotation() {
      if (hoverImageTimer !== null) {
        clearInterval(hoverImageTimer);
        hoverImageTimer = null;
      }
    }
    function startHoverImageRotation(card, game) {
      stopHoverImageRotation();
      const imageElement = card.querySelector("[data-hover-image]");
      if (!imageElement) return;
      const screenshots = (game.steamData?.screenshots || []).map(image => image.path_thumbnail || image.path_full).filter(Boolean);
      const images = [...new Set([imageUrl(game), ...screenshots])];
      let activeImage = 0;
      imageElement.src = images[activeImage];
      if (images.length < 2) return;
      hoverImageTimer = window.setInterval(() => {
        if (!card.matches(":hover") && !card.contains(document.activeElement)) {
          stopHoverImageRotation();
          return;
        }
        activeImage = (activeImage + 1) % images.length;
        imageElement.src = images[activeImage];
      }, 2500);
    }
    function queueHoverSummary(event) {
      const card = event.target.closest(".game-card");
      if (!card || card.contains(event.relatedTarget)) return;
      const game = games.find(item => item.id === card.dataset.gameId);
      const description = card.querySelector("[data-hover-description]");
      if (!game || !description) return;
      startHoverImageRotation(card, game);
      if (game.shortDescription) {
        description.textContent = game.shortDescription;
        return;
      }
      clearTimeout(hoverSummaryTimer);
      description.textContent = "Cargando descripción...";
      hoverSummaryTimer = setTimeout(async () => {
        try {
          const data = await loadSteamData(game, false);
          game.shortDescription = data.short_description || `${game.title} · ${game.genre} · ${game.studio}.`;
          if (card.matches(":hover") || card.contains(document.activeElement)) startHoverImageRotation(card, game);
        } catch {
          game.shortDescription = `${game.title} · ${game.genre} · ${game.studio}.`;
        }
        description.textContent = game.shortDescription;
      }, 300);
    }
    grid.addEventListener("pointerover", queueHoverSummary);
    grid.addEventListener("focusin", queueHoverSummary);
    grid.addEventListener("pointerout", event => {
      const card = event.target.closest(".game-card");
      if (card && !card.contains(event.relatedTarget)) {
        clearTimeout(hoverSummaryTimer);
        if (!card.contains(document.activeElement)) stopHoverImageRotation();
      }
    });
    function renderGameDetails(game, data) {
      const trailer = (data.movies || []).find(movie => movie.highlight) || (data.movies || [])[0];
      game.trailer = game.noTrailer ? "" : game.trailerOverride || trailer?.hls_h264 || "";
      game.trailerName = game.noTrailer ? "" : game.trailerName || trailer?.name || "Tráiler oficial";
      const screenshots = (data.screenshots || []).slice(0, 6).map(image => image.path_thumbnail || image.path_full).filter(Boolean);
      game.gallery = screenshots.length ? screenshots : [game.header || imageUrl(game)];
      const minimum = data.pc_requirements?.minimum;
      const recommended = data.pc_requirements?.recommended;
      const description = data.short_description || game.shortDescription || game.localDescription || `${game.title} es un juego de ${game.genre.toLocaleLowerCase("es")} desarrollado por ${game.studio}.`;
      const playerMarkup = game.noTrailer ? "" : game.trailer ? `<video class="trailer-player" controls preload="none" poster="${game.gallery[0]}" aria-label="${escapeHtml(game.trailerName)} de ${escapeHtml(game.title)}"></video>` : `<p class="spec-intro">No hay un tráiler disponible para este juego.</p>`;
      const trailerMarkup = game.noTrailer || !game.trailer ? "" : `<h3 class="trailer-title">${escapeHtml(game.trailerName)}</h3>${playerMarkup}<a class="trailer-fallback" id="trailerFallback" href="${game.storeUrl}" target="_blank" rel="noreferrer">Abrir tráiler en la tienda oficial ↗</a>`;
      gameDialog.innerHTML = `<div class="detail-head"><div><span class="eyebrow">${escapeHtml(game.genre)} · ${escapeHtml(game.studio)}</span><h2 id="detailTitle">${escapeHtml(game.title)}</h2></div><button class="close-button" data-close-details aria-label="Cerrar ficha">×</button></div><div class="detail-layout"><section class="detail-media ${game.noTrailer ? "images-only" : ""}" aria-label="Imágenes del juego"><img class="detail-main-image" id="detailImage" src="${game.gallery[0]}" alt="Captura de ${escapeHtml(game.title)}"><div class="gallery-strip">${game.gallery.map((image, index) => `<button class="gallery-thumb" data-gallery="${index}" aria-label="Ver captura ${index + 1}" aria-current="${index === 0}"><img src="${image}" alt=""></button>`).join("")}</div><p class="detail-description">${escapeHtml(description)}</p>${trailerMarkup}<a class="detail-source" href="${game.storeUrl}" target="_blank" rel="noreferrer">Ver ficha oficial y consultar precio ↗</a></section><section class="detail-specs"><p class="spec-intro">Requisitos publicados por Steam para PC/Windows. Las imágenes proceden de la ficha oficial del juego.</p>${requirementRows(minimum, "Requisitos mínimos")}${requirementRows(recommended, "Requisitos recomendados")}<p class="spec-intro">Precio consultado en Steam España: <strong>${game.price == null ? "No disponible" : game.price === 0 ? "Gratis" : money(game.price)}</strong>. Puede cambiar según la región o las ofertas vigentes.</p></section></div>`;
      if (game.trailer && !game.noTrailer) {
        const player = gameDialog.querySelector("video");
        if (player.canPlayType("application/vnd.apple.mpegurl")) player.src = game.trailer;
        else if (window.Hls && Hls.isSupported()) {
          activeHls = new Hls();
          activeHls.loadSource(game.trailer);
          activeHls.attachMedia(player);
        } else gameDialog.querySelector("#trailerFallback").style.display = "inline-block";
      }
    }
    function stopTrailer() {
      const player = gameDialog.querySelector("video");
      if (player) { player.pause(); player.removeAttribute("src"); player.load(); }
      if (activeHls) { activeHls.destroy(); activeHls = null; }
    }
    async function showGameDetails(gameId) {
      const game = games.find(item => item.id === gameId);
      if (!game) return;
      stopTrailer();
      activeDetailsGame = game;
      gameDialog.showModal();
      renderGameDetails(game, game.steamData || {});
      try {
        const data = await loadSteamData(game);
        if (!gameDialog.open || activeDetailsGame !== game) return;
        renderGameDetails(game, data);
      } catch {
        return;
      }
    }
    gameDialog.addEventListener("click", event => {
      if (event.target === gameDialog || event.target.closest("[data-close-details]")) { gameDialog.close(); return; }
      const thumbnail = event.target.closest("[data-gallery]");
      if (!thumbnail || !activeDetailsGame) return;
      const index = Number(thumbnail.dataset.gallery);
      gameDialog.querySelector("#detailImage").src = activeDetailsGame.gallery[index];
      gameDialog.querySelectorAll("[data-gallery]").forEach(button => button.setAttribute("aria-current", String(button === thumbnail)));
    });
    gameDialog.addEventListener("close", stopTrailer);
    function renderCart() {
      const entries = Object.entries(cart).filter(([id, qty]) => qty > 0 && games.some(game => game.id === id && game.price != null));
      if (entries.length !== Object.keys(cart).length) {
        cart = Object.fromEntries(entries);
        persist();
      }
      const count = entries.reduce((sum, [, qty]) => sum + qty, 0);
      document.getElementById("cartCount").textContent = count;
      document.getElementById("cartTitleCount").textContent = count ? `(${count})` : "";
      const items = document.getElementById("cartItems");
      const summary = document.getElementById("cartSummary");
      if (!entries.length) {
        items.innerHTML = `<div class="cart-empty"><svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M3 4h2l2.2 11.2a2 2 0 0 0 2 1.6h8.9a2 2 0 0 0 2-1.6L22 8H6"/><circle cx="10" cy="20" r="1"/><circle cx="18" cy="20" r="1"/></svg><br>Tu próxima aventura empieza aquí.<br>Añade un juego para continuar.</div>`;
        summary.innerHTML = "";
        return;
      }
      let total = 0;
      items.innerHTML = entries.map(([id, qty]) => {
        const game = games.find(item => item.id === id);
        if (!game) return "";
        total += game.price * qty;
        return `<div class="cart-item"><img src="${imageUrl(game)}" alt=""><div><h3>${escapeHtml(game.title)}</h3><small>${money(game.price)} cada uno</small><div class="quantity"><button data-qty="${id}" data-delta="-1" aria-label="Quitar una unidad">−</button><span>${qty}</span><button data-qty="${id}" data-delta="1" aria-label="Añadir una unidad">+</button><button class="remove-item" data-remove="${id}">Eliminar</button></div></div><span class="cart-price">${money(game.price * qty)}</span></div>`;
      }).join("");
      summary.innerHTML = `<div class="summary-row"><span>Subtotal</span><strong>${money(total)}</strong></div><button class="primary-button checkout" id="checkoutButton">Continuar con la compra <span aria-hidden="true">→</span></button>`;
      document.getElementById("checkoutButton").addEventListener("click", () => notify("Demo: el pago no está conectado."));
    }
    function notify(message) {
      const toast = document.getElementById("toast");
      toast.textContent = message;
      toast.classList.add("show");
      clearTimeout(notify.timer);
      notify.timer = setTimeout(() => toast.classList.remove("show"), 2100);
    }
    function setCartOpen(open) {
      document.getElementById("cartDrawer").classList.toggle("open", open);
      document.getElementById("backdrop").classList.toggle("open", open);
      document.getElementById("cartDrawer").setAttribute("aria-hidden", String(!open));
      document.body.style.overflow = open ? "hidden" : "";
    }
    function setCollection(collection) {
      activeCollection = collection;
      wishlistOnly = false;
      document.querySelectorAll(".filter-option[data-collection]").forEach(button => button.classList.toggle("selected", button.dataset.collection === collection));
      renderGames();
    }
    document.getElementById("genreTabs").addEventListener("click", event => {
      const button = event.target.closest("[data-genre]");
      if (!button) return;
      activeGenre = button.dataset.genre;
      renderGenres();
      renderGames();
    });
    document.querySelectorAll(".filter-option[data-collection]").forEach(button => button.addEventListener("click", () => setCollection(button.dataset.collection)));
    document.querySelectorAll("[data-nav-filter]").forEach(link => link.addEventListener("click", () => setCollection(link.dataset.navFilter)));
    document.getElementById("searchInput").addEventListener("input", renderGames);
    document.getElementById("sortSelect").addEventListener("change", renderGames);
    document.getElementById("headerSearch").addEventListener("click", () => { document.getElementById("searchInput").focus(); document.getElementById("catalogo").scrollIntoView({ behavior: "smooth" }); });
    document.getElementById("wishlistView").addEventListener("click", () => { wishlistOnly = !wishlistOnly; activeCollection = "Todos"; document.querySelectorAll(".filter-option[data-collection]").forEach(button => button.classList.toggle("selected", button.dataset.collection === "Todos")); document.getElementById("wishlistView").textContent = wishlistOnly ? "♡ Ver toda la tienda" : "♡ Mi lista"; renderGames(); });
    document.getElementById("railWishlist").addEventListener("click", () => { wishlistOnly = true; activeCollection = "Todos"; document.querySelectorAll(".filter-option[data-collection]").forEach(button => button.classList.remove("selected")); renderGames(); });
    grid.addEventListener("click", async event => {
      const add = event.target.closest("[data-add]");
      const favorite = event.target.closest("[data-wishlist]");
      const details = event.target.closest("[data-details]");
      if (details) showGameDetails(details.dataset.details);
      if (add) {
        const game = games.find(item => item.id === add.dataset.add);
        try {
          if (game.price == null) await loadSteamData(game);
          if (game.price == null) { notify("Consulta el precio en la tienda oficial."); return; }
          cart[game.id] = (cart[game.id] || 0) + 1;
          persist(); renderCart(); notify("Añadido al carrito");
        } catch { notify("No se pudo consultar el precio ahora."); }
      }
      if (favorite) {
        const id = favorite.dataset.wishlist;
        wishlist[id] = !wishlist[id];
        if (!wishlist[id]) delete wishlist[id];
        persist(); renderGames();
      }
    });
    document.getElementById("cartItems").addEventListener("click", event => {
      const quantity = event.target.closest("[data-qty]");
      const remove = event.target.closest("[data-remove]");
      if (quantity) {
        const id = quantity.dataset.qty;
        cart[id] = (cart[id] || 0) + Number(quantity.dataset.delta);
        if (cart[id] <= 0) delete cart[id];
      }
      if (remove) delete cart[remove.dataset.remove];
      persist(); renderCart();
    });
    const heroImageSlides = [...document.querySelectorAll(".hero-image-carousel img")];
    let activeHeroSlide = 0;
    function rotateHeroImages() {
      heroImageSlides[activeHeroSlide].classList.remove("active");
      activeHeroSlide = (activeHeroSlide + 1) % heroImageSlides.length;
      heroImageSlides[activeHeroSlide].classList.add("active");
    }
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) window.setInterval(rotateHeroImages, 5000);
    document.getElementById("heroBuy").addEventListener("click", () => showGameDetails("gta-v"));
    document.getElementById("openCart").addEventListener("click", () => setCartOpen(true));
    document.getElementById("closeCart").addEventListener("click", () => setCartOpen(false));
    document.getElementById("backdrop").addEventListener("click", () => setCartOpen(false));
    document.addEventListener("keydown", event => { if (event.key === "Escape") setCartOpen(false); });
    async function initializeStore() {
      const savedEntries = Object.entries(cart).filter(([id, quantity]) => quantity > 0 && games.some(game => game.id === id));
      cart = Object.fromEntries(savedEntries);
      for (const [id] of savedEntries) {
        const game = games.find(item => item.id === id);
        try { await loadSteamData(game, false); }
        catch { if (game.price == null) delete cart[id]; }
      }
      persist();
      renderGenres();
      renderGames();
      renderCart();
    }
    initializeStore();
