/**
 * Copyright 2012 Google, Inc. All Rights Reserved.
 *
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

/**
 * @fileoverview WTF version utilities.
 * The versions set in this file come from {@code scripts/update-version.sh} and
 * should not be set manually.
 *
 * @author benvanik@google.com (Ben Vanik)
 */

goog.provide('wtf.version');


/**
 * Gets the current build number as an integer value.
 * This can be used to compare two build numbers using normal integer
 * comparison. If you need a human-readable build number, use {@see #toString}.
 * @return {number} Build number, as an integer.
 */
wtf.version.getValue = function() {
  // Set via update-version.sh
  return 1368172800000; // time
};


/**
 * Gets the git SHA of the commit this build was taken at.
 * @return {string} A git SHA.
 */
wtf.version.getCommit = function() {
  // Set via update-version.sh
  return '8a00cc72bdcc54c331f2d3c2c7c38a82d2c11843'; // sha
};


/**
 * Gets the version as a human-readable string that matches the version string
 * used elsewhere, such as {@code 2012.12.12-2}.
 * @return {string} Version string.
 */
wtf.version.toString = function() {
  // Set via update-version.sh
  return '2013.5.10-1'; // string
};


goog.exportSymbol(
    'wtf.version.getValue',
    wtf.version.getValue);
goog.exportSymbol(
    'wtf.version.getCommit',
    wtf.version.getCommit);
goog.exportSymbol(
    'wtf.version.toString',
    wtf.version.toString);
