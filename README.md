# Cogs & Clouds

Aden's Minecraft 1.21.1 NeoForge modpack for the **Cub Craft** server (`cubcraft.modrinth.gg`), in two versions:

| Version | For | Memory |
|---|---|---|
| **Ultra** | Strong gaming PCs. Shaders, high-res textures, extra visual mods. | 8 GB (change in instance settings) |
| **Lite** | Laptops and MacBooks. Same content, lighter visuals. | 4 GB |

Both versions update themselves every time you press **Launch**.

## First-time setup (Prism Launcher)

1. Install [Prism Launcher](https://prismlauncher.org/) and sign in with your Microsoft account.
2. Click **Add Instance → Import**, and paste one of these links:
   - Ultra: `https://raw.githubusercontent.com/AdenWD/cogs-and-clouds/main/instances/Cogs-and-Clouds-Ultra.zip`
   - Lite: `https://raw.githubusercontent.com/AdenWD/cogs-and-clouds/main/instances/Cogs-and-Clouds-Lite.zip`
3. Click **OK**, then **Launch**. A small "packwiz" window downloads the whole pack the first time (about 1–1.5 GB, a few minutes). After that, launches only download what changed.
4. Join **Cub Craft** from the server list.

If Prism asks which Java to use, let it download Java 21 automatically.

## Notes

- Your own settings (video options, keybinds, shader choice, minimap waypoints) are only set on the first install and are never overwritten afterwards.
- Configs, quests, scripts and mods are kept in sync with the pack, so local edits to those files get replaced on the next launch.
- If an update fails (no internet), the game still starts with what you already have.

## For Aden

- `ultra/` and `lite/` are [packwiz](https://packwiz.infra.link/) packs. Mods from Modrinth are referenced by download link. Patched or non-Modrinth jars and packs live in `_files/`.
- To publish changes, Claude rebuilds the pack from your Prism instances and you run `Downloads\cogs-pack-tools\2-publish.bat`.
