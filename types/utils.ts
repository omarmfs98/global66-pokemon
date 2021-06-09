declare module 'global66-utils' {
  interface Clipboard {
    writeText(newClipText: string): Promise<void>
    // Add any other methods you need here.
  }

  interface NavigatorClipboard {
    // Only available in a secure context.
    readonly clipboard?: Clipboard
  }

  interface Navigator extends NavigatorClipboard {}
}
