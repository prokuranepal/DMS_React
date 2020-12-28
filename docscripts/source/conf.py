# Configuration file for the Sphinx documentation builder.
#
# This file only contains a selection of the most common options. For a full
# list see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Path setup --------------------------------------------------------------

# If extensions (or modules to document with autodoc) are in another directory,
# add these directories to sys.path here. If the directory is relative to the
# documentation root, use os.path.abspath to make it absolute, like shown here.
#
# import os
# import sys
# sys.path.insert(0, os.path.abspath('.'))


# -- Project information -----------------------------------------------------

project = 'DMS'
copyright = '2020, Prokura Innovations Pvt. Ltd.'
author = 'Prokura Innovations Pvt. Ltd.'

# The full version, including alpha/beta/rc tags
release = '1.0'


# -- General configuration ---------------------------------------------------

# Add any Sphinx extension module names here, as strings. They can be
# extensions coming with Sphinx (named 'sphinx.ext.*') or your custom
# ones.
extensions = [
]

# Add any paths that contain templates here, relative to this directory.
templates_path = ['_templates']

# List of patterns, relative to source directory, that match files and
# directories to ignore when looking for source files.
# This pattern also affects html_static_path and html_extra_path.
exclude_patterns = []

extensions = ['sphinx_js','recommonmark']
# -- Options for HTML output -------------------------------------------------

# The theme to use for HTML and HTML Help pages.  See the documentation for
# a list of builtin themes.
#
html_theme = 'bizstyle'

# Add any paths that contain custom static files (such as style sheets) here,
# relative to this directory. They are copied after the builtin static files,
# so a file named "default.css" will overwrite the builtin "default.css".
html_static_path = ['_static']
# js_source_path=['../../src','../../src/components/ActivityBox','../../src/components/CardBox','../../src/components/CardMenu','../../src/components/CardLayout','../../src/components/InfoCard','../../src/homeComponents/CheckList/CheckListItem','../../src/homeComponents/CreateUser','../../src/homeComponents/DroneList','../../src/homeComponents/DroneList/DroneListItem','../../src/homeComponents/CheckList','../../src/homeComponents/imsCard','../../src/homeComponents/MedicineDetails','../../src/homeComponents/MissionList','../../src/homeComponents/MissionList/MissionListItem','../../src/homeComponents/MissionPlanner/MissionView','../../src/homeComponents/MissionPlanner/MissionView/MissionData','../../src/homeComponents/OrderLists','../../src/homeComponents/OrderLists/OrderList','../../src/homeComponents/RotatedMarker','../../src/homeComponents/User']
js_source_path=['../../src','../../src/components/ActivityBox','../../src/components/CardBox','../../src/components/CardMenu','../../src/components/CardLayout','../../src/components/InfoCard','../../src/homeComponents/CheckList/CheckListItem','../../src/homeComponents/CheckList','../../src/homeComponents/DroneList','../../src/homeComponents/DroneList/DroneListItem','../../src/homeComponents/imsCard','../../src/homeComponents/MedicineDetails','../../src/homeComponents/MissionList/MissionListItem','../../src/homeComponents/MissionList','../../src/homeComponents/MissionPlanner/MissionView','../../src/homeComponents/MissionPlanner/MissionView/MissionData']
root_for_relative_js_paths='../../src'
primary_domain = 'js'
