---
title: Setup and Features
description: Exploring features to help you get set up with Himitsu.
lastUpdated: false
editLink: false
download: true
prev: false
next: false
---

### Home UI Navigation

- Open the quick settings dialog by clicking the top right icon on the home screen
- Long pressing the top right icon on the home screen opens the notification page
- Long pressing the avatar in the dialog will display / hide incognito and client mode
- Long pressing the notification icon in the dialog will open the activities page
- Clicking the notification icon in the dialog will open the notification page
- The inbox icon on the notifications page will also open the activities page
- AI recommendations (Sprout) and AniList Forums can be disabled in `UI Settings`

### Reverse Source Search

If you want to search for a title across all your sources, you can use the Reverse Source Search feature.

Follow these steps:

1. Click on the icon at the top right to open the quick settings dialog.
2. Click on the search bar and enter some search text.
3. Click an item to find it from AniList or long press for more options.

### Adding External Progress

Long press the item cover image to open the list editor and add, modify, or delete progress. This dialog is also available on the watch or read page for each title.

### Syncing Between Devices
`Settings => Common => Sync Episode / Chapter Progress`

Requires logging in to AniList in order to create a sync profile.
All progress data is stored using an anonymous authentication.

### Using External Players

Long press an item from the `Select Server` dialog to open it in your default media player.

### Quick Resume
`Settings => Common => Add Shortcuts to Launcher`

On newer Android devices, holding down the application icon from your device launcher will open a menu of common actions. For example, a messaging application will list recent contacts. For Himitsu, this will be the most recent read or watched items.

### Importing Downloads

Each media page includes an option to import anime, manga, and novels that were obtained from other sources. The import button appears on each item, but also next to the subscribe button. Selecting the general import button will require first selecting the episode, chapter, or volume.

Keep in mind, these files are currently **moved** into the app download folder. Deleting them will remove the original file.

### Subtitle Translation
`Settings => Anime => Player Settings (Subtitles) => Translate Subtitles`

Enables translation of compatible subtitles to the language currently selected in `Subtitle Language`

The translation and language settings are also available using the translate button in the player UI.

### Easy Setup
`Settings => Easy Setup`

Easy setup allows configuring a number of loading features that may be confusing on their own by selecting what is most important to you. The features being configured include `Loading Affinity`, `Episode Timeout`, `Source Prioritization`, `Social Stats in Media`, and `Use Trailer as Banner`

Each of the settings configured by easy settings can be individually modified, so feel free to use this as a starting point to make additional changes.

 - Defaults: Balanced settings that are predefined when installing Himitsu
 - Fast Loading: Absolute minimum values to still have important info, but drops some of the extras
 - More Content: Ensures all info and features are shown at the potential cost of longer loading times

### Loading Affinity
`Settings => UI Settings => Loading Affinity`

Some devices and internet connections are faster than others. When more data is loaded at once, fewer loads need to be performed. When less data is loaded at once, loading is completed faster. Affinity is how this is balanced for the device and connection using it.

Affinity is not applied to certain items that always require retrieving the maximum number of values, such as search results and notifications.

### Episode Timeout
`Settings => Anime => Anify Episode Timeout`
`Settings => Anime => Kitsu Episode Timeout`

Episode information includes thumbnails, descriptions, and titles of individual episodes. While this information does improve the overall experience, the providers can occasionally be slow to respond. This determines if and how long to wait before skipping a provider.

### Source Prioritization

_Warning: Enabling with slow sources or internet may cause loading delays_

`Settings => Common => Prioritize Source List`

Attempts to sort sources based on a timed quick search of their content using the title of the selected item. This search will not exceed 1 second per source, but can easily become quite long with a lot of slow searches.

### Social Stats in Media

_Warning: Enabling with a large follow list or slow internet may cause loading delays_

`Settings => Common => Social Stats in Media`

Social stats are the reading and watching progress of other users you follow and this setting determines whether they will be displayed directly in the media info for an anime or manga.

### Use Trailer as Banner
`Settings => UI Settings => Use Trailer as Banner`

Plays the trailer at the top of the media page for an anime or manga then returns to the original banner when it is complete. Sound is disabled by default, but can be enabled using the button on the individual trailer.

### Covers in Trending Panel
`Settings => UI Settings => Covers in Trending Panel`

Determines whether the "cover image" for a given anime or manga will be displayed in the banner across the top of the anime and manga pages. Disabling this option may help smaller screens to not feel overwhelmed.

### Torrent Support

- Clicking a torrent will prompt to enable torrent access temporarily (preferred)
- `Settings => Anime => Internal TorrServer` will enable persistent torrent access

Once enabled, clicking a torrent will launch it using the regular video player

### Client and Limited Modes

#### Client Mode

Client mode allows use of Himitsu as a regular AniList tracker with some integration for official streaming sites. all extension features and menus are disabled.

#### Limited Mode

Limited mode is a modification on the offline mode common in other apps. Unlike most apps, some features that use internet may still be enabled. Options are provided to enable an offline database, the continue watching and reading list, and extensions. Tracking can also be stored until returning online.

`Settings => System => Track Progress When Offline`

Progress will be stored when offline and updated on AniList when returning to the same anime or manga while online. While opening the media page to upload progress is a minor inconvenience, it prevents overloading AniList and causing account restrictions.

`Settings => System => Offline Db in Limited Mode`

The offline database is enabled by default, but not available until it has been updated. Similarly, it  is unavailable if it is removed (until updating again). The database is always growing and currently takes about 40MB. To save on bandwidth and space, all update checks are manually initiated.

### Securing Himitsu
`Settings => System => Biometric Verification`

Biometric verification allows using fingerprint or, when supported by the device, facial recognition to unlock the app.

### Floating Avatar Button
`Settings => UI Settings => Floating Avatar Button`

Clicking on the avatar and dragging it away from its origin will produce a second, identical avatar that can be moved freely about the screen.

When on the home screen, clicking this button will open a list of all subscribed items similar to the quick resume menu and long pressing will open the settings dialog.

On the anime and manga pages, it will function exactly like the regular avatar. Clicking will open the settings dialog and long pressing will open the notifications page.

The floating button will lock back in place when leaving a screen or dragging it back to the main avatar. This feature is strictly for novelty purposes.