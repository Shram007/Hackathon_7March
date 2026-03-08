/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowLeft, ArrowRight, MapPin, X } from 'lucide-react';
import { Destination } from '../data/destinations';
import { LOCAL_PLACES, LOCAL_PLACE_COLORS, LocalPlaceType } from '../data/localPlaces';

interface DestinationExplorePanelProps {
  destination: Destination;
  confirmed: boolean;
  onConfirm: () => void;
  onBack: () => void;
}

const TYPE_LABEL: Record<LocalPlaceType, string> = {
  beach: 'Beach',
  nature: 'Nature',
  culture: 'Culture',
  food: 'Food',
  town: 'Town',
  landmark: 'Landmark',
  island: 'Island',
};

export function DestinationExplorePanel({
  destination,
  confirmed,
  onConfirm,
  onBack,
}: DestinationExplorePanelProps) {
  const localPlaces = LOCAL_PLACES[destination.id] ?? [];

  return (
    <AnimatePresence mode="wait">
      {!confirmed ? (
        // ── Confirmation card ────────────────────────────────────────────────
        <motion.div
          key="confirm-card"
          initial={{ opacity: 0, y: 32, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.97 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-32 left-1/2 -translate-x-1/2 z-30 w-[420px] max-w-[calc(100vw-2rem)]"
        >
          <div
            className="bg-parchment border border-ink/12 shadow-2xl rounded-2xl overflow-hidden"
            style={{ boxShadow: '0 16px 60px rgba(26,26,26,0.22), 0 2px 0 rgba(26,26,26,0.06)' }}
          >
            {/* Header bar */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-ink/[0.07] bg-ink/[0.02]">
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut', repeatDelay: 2 }}
                >
                  <Sparkles size={13} className="text-emerald" />
                </motion.div>
                <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-ink/50">
                  Atlas · Destination Selected
                </span>
              </div>
              <button
                onClick={onBack}
                className="text-ink/30 hover:text-ink/60 transition-colors"
                title="Dismiss"
              >
                <X size={14} />
              </button>
            </div>

            <div className="px-5 pt-4 pb-5">
              {/* Destination name */}
              <div className="flex items-start gap-3 mb-3">
                <div className="w-2 h-2 rounded-full bg-emerald flex-shrink-0 mt-2" />
                <div>
                  <h2 className="font-serif text-xl font-bold text-ink leading-tight">
                    {destination.name}
                  </h2>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-ink/40 mt-0.5">
                    {destination.country} · {destination.region}
                  </p>
                </div>
              </div>

              {/* AI confirmation message */}
              <div className="bg-ink/[0.03] border border-ink/[0.06] rounded-xl px-4 py-3 mb-4">
                <p className="font-sans text-[13px] leading-relaxed text-ink/75">
                  Great choice.{' '}
                  <span className="font-medium text-ink">{destination.name}</span>{' '}
                  {destination.description.split('.')[0].toLowerCase().replace(/^the city of light — /, '')}.
                  Would you like to continue planning your trip here?
                </p>
              </div>

              {/* Local places preview */}
              {localPlaces.length > 0 && (
                <div className="mb-4">
                  <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-ink/35 mb-2">
                    Places to explore
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {localPlaces.slice(0, 5).map((place) => (
                      <div
                        key={place.name}
                        className="flex items-center gap-1 px-2 py-1 rounded-full border border-ink/10 bg-parchment"
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: LOCAL_PLACE_COLORS[place.type] }}
                        />
                        <span className="font-mono text-[9px] text-ink/60">{place.name}</span>
                      </div>
                    ))}
                    {localPlaces.length > 5 && (
                      <div className="flex items-center px-2 py-1 rounded-full border border-ink/10">
                        <span className="font-mono text-[9px] text-ink/35">+{localPlaces.length - 5} more</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex items-center gap-2.5">
                <button
                  onClick={onBack}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-ink/15 text-ink/50 hover:text-ink/70 hover:border-ink/25 font-mono text-[9px] uppercase tracking-widest transition-all"
                >
                  <ArrowLeft size={11} />
                  Back
                </button>
                <button
                  onClick={onConfirm}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-ink text-parchment font-mono text-[9px] uppercase tracking-widest hover:bg-ink/85 transition-all shadow-md"
                >
                  <MapPin size={11} />
                  Continue with {destination.name}
                  <ArrowRight size={11} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        // ── Exploring status bar ─────────────────────────────────────────────
        <motion.div
          key="exploring-bar"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="fixed top-5 left-1/2 -translate-x-1/2 z-20 pointer-events-auto"
        >
          <div className="flex items-center gap-3 bg-ink/92 backdrop-blur-md text-parchment pl-4 pr-3 py-2 rounded-full shadow-xl border border-parchment/10">
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ scale: [1, 1.25, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                className="w-2 h-2 rounded-full bg-emerald"
              />
              <span className="font-mono text-[9px] uppercase tracking-widest text-parchment/60">
                Exploring
              </span>
              <span className="font-serif text-sm font-semibold text-parchment">
                {destination.name}
              </span>
              <span className="font-mono text-[8px] text-parchment/35">
                · {destination.country}
              </span>
            </div>
            {/* Legend */}
            <div className="flex items-center gap-1.5 border-l border-parchment/15 pl-3">
              {(['landmark', 'beach', 'culture', 'nature'] as LocalPlaceType[]).map((t) => (
                <div key={t} className="flex items-center gap-1">
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: LOCAL_PLACE_COLORS[t] }}
                  />
                  <span className="font-mono text-[7px] text-parchment/40 uppercase">{TYPE_LABEL[t]}</span>
                </div>
              ))}
            </div>
            <button
              onClick={onBack}
              className="text-parchment/40 hover:text-parchment/70 transition-colors ml-1"
              title="Exit destination mode"
            >
              <X size={13} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
