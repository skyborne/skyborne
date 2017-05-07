//
//  TripsViewController.swift
//  Skyborne
//
//  Created by Dominic Philip on 5/5/17.
//  Copyright © 2017 Skyborne Inc. All rights reserved.
//

import UIKit

class TripsTableViewController: UITableViewController {

    override func viewDidLoad() {
        tableView.tableFooterView = UIView()
    }
    
    // MARK: Table View Data Sources

    override func numberOfSections(in tableView: UITableView) -> Int {
        return 1; // TODO: Remove Stub
    }
    
    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return 1; // TODO: Remove Stub
    }
    
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "Trip Cell", for: indexPath)
        cell.textLabel?.text = "New York City" // TODO: Remove Stub
        
        return cell
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        let detailViewController = segue.destination as UIViewController
        
        if let cell = sender as? UITableViewCell {
            detailViewController.navigationItem.title = cell.textLabel?.text
        }
    }

}
