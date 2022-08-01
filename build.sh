#!/usr/bin/env bash
SCRIPT_PATH=$(dirname $(realpath $0))
"$SCRIPT_PATH/node_modules/pnpm/bin/pnpm.cjs" run build
rm -r "$SCRIPT_PATH/powertools/"
mkdir "$SCRIPT_PATH/powertools"
cp -r "$SCRIPT_PATH/dist" "$SCRIPT_PATH/LICENSE" "$SCRIPT_PATH/main.py" "$SCRIPT_PATH/package.json" "$SCRIPT_PATH/plugin.json" "$SCRIPT_PATH/README.md" "$SCRIPT_PATH/server.py" "$SCRIPT_PATH/powertools"
rsync -avz "$SCRIPT_PATH/powertools" steamdeck:/home/deck/homebrew/plugins
