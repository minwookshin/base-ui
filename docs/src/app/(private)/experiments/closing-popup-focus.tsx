'use client';
import * as React from 'react';
import { Popover } from '@base-ui/react/popover';
import styles from './popup-tabbing.module.css';
import stress from './closing-popup-focus.module.css';

/** Manual regression fixture for #5519, built on PR #5537. */
export default function ClosingPopupFocus() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className={styles.Page}>
      <h1 className={styles.Title}>Closing popup focus</h1>
      <p className={styles.Description}>
        Open the popup, press Escape, then Tab. Focus should move to Next task while the popup
        fades. Reopening during the fade should restore keyboard interaction.
      </p>
      <section className={styles.Sections}>
        <div className={styles.Row}>
          <button type="button" className={styles.Button}>
            Previous task
          </button>
          <Popover.Root open={open} onOpenChange={setOpen}>
            <Popover.Trigger className={styles.Button}>Review options</Popover.Trigger>
            <Popover.Portal>
              <Popover.Positioner sideOffset={8}>
                <Popover.Popup
                  className={`${styles.PopoverPopupColumn} ${stress.Popup}`}
                  finalFocus={() => true}
                >
                  <Popover.Title className={styles.InnerTitle}>Review options</Popover.Title>
                  <Popover.Description className={styles.InnerDescription}>
                    This fixture slows the exit to make focus handoff observable.
                  </Popover.Description>
                  <label className={styles.ComboboxField}>
                    Review note
                    <input className={styles.ComboboxInput} placeholder="Add a note" />
                  </label>
                  <Popover.Close className={styles.Button}>Done</Popover.Close>
                </Popover.Popup>
              </Popover.Positioner>
            </Popover.Portal>
          </Popover.Root>
          <button type="button" className={styles.Button}>
            Next task
          </button>
        </div>
        <p className={styles.Description}>Popup is {open ? 'open' : 'closed'}.</p>
      </section>
    </div>
  );
}
